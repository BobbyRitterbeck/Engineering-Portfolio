import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeaderComponent } from '../../shared/section-header/section-header';
import { TopicCardComponent } from '../../shared/topic-card/topic-card';

@Component({
  selector: 'app-home',
  imports: [SectionHeaderComponent, TopicCardComponent, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePageComponent {
  private readonly portfolioContentService = inject(PortfolioContentService);

  protected readonly meta = this.portfolioContentService.getMeta();
  protected readonly introduction = this.portfolioContentService.getIntroduction();
  protected readonly purposeItems = this.portfolioContentService.getPurposeItems();
  protected readonly parts = this.portfolioContentService.getParts();
}
