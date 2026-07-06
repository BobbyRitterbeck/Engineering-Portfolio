import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeaderComponent } from '../../shared/section-header/section-header';
import { TopicCardComponent } from '../../shared/topic-card/topic-card';

@Component({
  selector: 'app-part-overview',
  imports: [SectionHeaderComponent, TopicCardComponent, RouterLink],
  templateUrl: './part-overview.html',
  styleUrl: './part-overview.scss',
})
export class PartOverviewPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly portfolioContentService = inject(PortfolioContentService);

  private readonly routePartSlug = toSignal(
    this.route.data.pipe(map((data) => (data['partSlug'] as string) ?? '')),
    { initialValue: '' },
  );

  protected readonly partSlug = computed(
    // `partSlug` can come from either route data or the path itself.
    () => this.routePartSlug() || this.route.snapshot.paramMap.get('partSlug') || '',
  );

  protected readonly part = computed(() =>
    this.portfolioContentService.getPartBySlug(this.partSlug()),
  );
}
