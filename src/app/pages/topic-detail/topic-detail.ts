import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { DocContentComponent } from '../../shared/doc-content/doc-content';
import { SectionHeaderComponent } from '../../shared/section-header/section-header';

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

  private inferPartSlugFromUrl(): string {
    // Defensive fallback for direct URL access.
    const url = this.route.snapshot.url.map((segment) => segment.path).join('/');
    if (url.startsWith('foundations')) return 'foundations';
    if (url.startsWith('sandbox')) return 'sandbox';
    if (url.startsWith('projects')) return 'projects';
    return '';
  }
}
