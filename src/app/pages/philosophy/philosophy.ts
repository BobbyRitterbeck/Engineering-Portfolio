import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeaderComponent } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-philosophy',
  imports: [SectionHeaderComponent],
  templateUrl: './philosophy.html',
  styleUrl: './philosophy.scss',
})
export class PhilosophyPageComponent {
  private readonly portfolioContentService = inject(PortfolioContentService);

  protected readonly philosophy = this.portfolioContentService.getPhilosophy();
}
