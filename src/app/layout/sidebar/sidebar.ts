import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAVIGATION, PORTFOLIO_META } from '../../data/portfolio.data';
import { NavItem } from '../../models/portfolio.models';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  protected readonly meta = PORTFOLIO_META;
  protected readonly navigation = NAVIGATION;
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
