import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { getPartBySlug } from '../../data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';
import { TopicCard } from '../../shared/topic-card/topic-card';

@Component({
  selector: 'app-part-overview',
  imports: [SectionHeader, TopicCard, RouterLink],
  templateUrl: './part-overview.html',
  styleUrl: './part-overview.scss',
})
export class PartOverviewPage {
  private readonly route = inject(ActivatedRoute);

  private readonly routePartSlug = toSignal(
    this.route.data.pipe(map((data) => (data['partSlug'] as string) ?? '')),
    { initialValue: '' },
  );

  protected readonly partSlug = computed(
    () => this.routePartSlug() || this.route.snapshot.paramMap.get('partSlug') || '',
  );

  protected readonly part = computed(() => getPartBySlug(this.partSlug()));
}
