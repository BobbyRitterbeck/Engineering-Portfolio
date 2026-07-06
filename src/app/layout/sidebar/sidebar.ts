import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { NavItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class SidebarComponent {
  private readonly portfolioContentService = inject(PortfolioContentService);

  protected readonly meta = this.portfolioContentService.getMeta();
  protected readonly navigation = this.portfolioContentService.getNavigation();
  protected readonly mobileOpen = signal(false);
  protected readonly expandedSections = signal<Record<string, boolean>>({
    '/foundations': true,
    '/sandbox': true,
    '/projects': true,
  });

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }

  toggleSection(item: NavItem, event: Event): void {
    // Prevents parent navigation click while toggling section visibility.
    event.preventDefault();
    event.stopPropagation();
    this.expandedSections.update((sections) => ({
      ...sections,
      [item.path]: !sections[item.path],
    }));
  }

  isExpanded(item: NavItem): boolean {
    return this.expandedSections()[item.path] ?? false;
  }
}
