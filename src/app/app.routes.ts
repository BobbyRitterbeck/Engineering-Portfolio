import { Routes } from '@angular/router';
import { AppShellComponent } from './layout/app-shell/app-shell';
import { HomePageComponent } from './pages/home/home';
import { PartOverviewPageComponent } from './pages/part-overview/part-overview';
import { PhilosophyPageComponent } from './pages/philosophy/philosophy';
import { PurposePageComponent } from './pages/purpose/purpose';
import { TopicDetailPageComponent } from './pages/topic-detail/topic-detail';

/**
 * Route data uses `partSlug` so feature pages can resolve content
 * without hard-coding part names in component logic.
 */
export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', component: HomePageComponent, title: 'Introduction' },
      { path: 'purpose', component: PurposePageComponent, title: 'Purpose' },
      { path: 'philosophy', component: PhilosophyPageComponent, title: 'Engineering Philosophy' },
      {
        path: 'foundations',
        component: PartOverviewPageComponent,
        title: 'Part I — Foundations',
        data: { partSlug: 'foundations' },
      },
      {
        path: 'sandbox',
        component: PartOverviewPageComponent,
        title: 'Part II — Sandbox Applications',
        data: { partSlug: 'sandbox' },
      },
      {
        path: 'projects',
        component: PartOverviewPageComponent,
        title: 'Part III — Intern Projects',
        data: { partSlug: 'projects' },
      },
      {
        path: 'foundations/:topicSlug',
        component: TopicDetailPageComponent,
        title: 'Foundation Topic',
        data: { partSlug: 'foundations' },
      },
      {
        path: 'sandbox/:topicSlug',
        component: TopicDetailPageComponent,
        title: 'Sandbox Application',
        data: { partSlug: 'sandbox' },
      },
      {
        path: 'projects/:topicSlug',
        component: TopicDetailPageComponent,
        title: 'Intern Project',
        data: { partSlug: 'projects' },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
