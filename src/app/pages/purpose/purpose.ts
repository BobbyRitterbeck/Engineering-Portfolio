import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeaderComponent } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-purpose',
  imports: [SectionHeaderComponent],
  templateUrl: './purpose.html',
  styleUrl: './purpose.scss',
})
export class PurposePageComponent {
  private readonly portfolioContentService = inject(PortfolioContentService);

  protected readonly purposeItems = this.portfolioContentService.getPurposeItems();
}
