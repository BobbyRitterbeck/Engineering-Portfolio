import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { DocSection } from '../../models/portfolio.models';
import { DocContentComponent } from '../../shared/doc-content/doc-content';
import { SectionHeaderComponent } from '../../shared/section-header/section-header';
import { scrollToSectionId, toSectionId } from '../../shared/utils/section-id.util';

interface TopicGuideSection {
  index: number;
  originalTitle: string;
  label: string;
}

interface TopicGuideGroup {
  name: string;
  sections: TopicGuideSection[];
}

@Component({
  selector: 'app-topic-detail',
  imports: [SectionHeaderComponent, DocContentComponent, RouterLink],
  templateUrl: './topic-detail.html',
  styleUrl: './topic-detail.scss',
})
export class TopicDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly portfolioContentService = inject(PortfolioContentService);

  private readonly routePartSlug = toSignal(
    this.route.data.pipe(map((data) => (data['partSlug'] as string) ?? '')),
    { initialValue: '' },
  );

  private readonly topicSlug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('topicSlug') ?? '')),
    { initialValue: '' },
  );

  protected readonly partSlug = computed(
    // Topic routes can resolve part from route data or URL, depending on route shape.
    () =>
      this.routePartSlug() ||
      this.route.snapshot.paramMap.get('partSlug') ||
      this.inferPartSlugFromUrl(),
  );

  protected readonly part = computed(() =>
    this.portfolioContentService.getPartBySlug(this.partSlug()),
  );

  protected readonly topic = computed(() =>
    this.portfolioContentService.getTopicBySlug(this.partSlug(), this.topicSlug()),
  );

  protected readonly topicIndex = computed(() => {
    const currentPart = this.part();
    const currentTopic = this.topic();
    if (!currentPart || !currentTopic) {
      return -1;
    }
    return currentPart.topics.findIndex((item) => item.slug === currentTopic.slug);
  });

  protected readonly previousTopic = computed(() => {
    const currentPart = this.part();
    const index = this.topicIndex();
    if (!currentPart || index <= 0) {
      return null;
    }
    return currentPart.topics[index - 1];
  });

  protected readonly nextTopic = computed(() => {
    const currentPart = this.part();
    const index = this.topicIndex();
    if (!currentPart || index < 0 || index >= currentPart.topics.length - 1) {
      return null;
    }
    return currentPart.topics[index + 1];
  });

  protected readonly guideGroups = computed<TopicGuideGroup[]>(() => {
    const sections = this.topic()?.sections ?? [];
    const grouped = new Map<string, TopicGuideGroup>();

    sections.forEach((section, index) => {
      const parsedTitle = this.parseSectionTitle(section);

      if (!grouped.has(parsedTitle.groupName)) {
        grouped.set(parsedTitle.groupName, {
          name: parsedTitle.groupName,
          sections: [],
        });
      }

      grouped.get(parsedTitle.groupName)?.sections.push({
        index,
        originalTitle: section.title,
        label: parsedTitle.subsectionName,
      });
    });

    const orderedMainGroups = ['Understand', 'Build', 'Evaluate']
      .map((groupName) => grouped.get(groupName))
      .filter((group): group is TopicGuideGroup => Boolean(group));

    const additionalGroups = Array.from(grouped.values()).filter(
      (group) => !['Understand', 'Build', 'Evaluate'].includes(group.name),
    );

    return [...orderedMainGroups, ...additionalGroups];
  });

  protected readonly hasMainGuideStructure = computed(() => {
    const groupNames = new Set(this.guideGroups().map((group) => group.name));
    return ['Understand', 'Build', 'Evaluate'].every((groupName) =>
      groupNames.has(groupName),
    );
  });

  protected readonly projectBrief = computed(() => {
    const currentTopic = this.topic();
    if (!currentTopic) {
      return '';
    }

    if (currentTopic.slug === 'keystroke-velocity-tracking') {
      return 'A privacy-first, reusable keystroke velocity feature integrated into Best Egg\'s existing Angular behavior-tracking pipeline to capture meaningful typing behavior metrics for downstream fraud analysis.';
    }

    return currentTopic.summary;
  });

  sectionAnchor(title: string, index: number): string {
    return toSectionId(title, index);
  }

  scrollToSection(title: string, index: number): void {
    scrollToSectionId(this.sectionAnchor(title, index));
  }

  private inferPartSlugFromUrl(): string {
    // Defensive fallback for direct URL access.
    const url = this.route.snapshot.url.map((segment) => segment.path).join('/');
    if (url.startsWith('foundations')) return 'foundations';
    if (url.startsWith('sandbox')) return 'sandbox';
    if (url.startsWith('projects')) return 'projects';
    return '';
  }

  private parseSectionTitle(section: DocSection): {
    groupName: string;
    subsectionName: string;
  } {
    const sectionParts = section.title.split(/\s[—-]\s/);

    if (sectionParts.length < 2) {
      return { groupName: 'Sections', subsectionName: section.title };
    }

    return {
      groupName: sectionParts[0].trim(),
      subsectionName: sectionParts.slice(1).join(' - ').trim(),
    };
  }
}
