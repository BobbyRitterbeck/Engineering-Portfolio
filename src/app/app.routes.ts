import { Routes } from '@angular/router';
import { AppShell } from './layout/app-shell/app-shell';
import { HomePage } from './pages/home/home';
import { PartOverviewPage } from './pages/part-overview/part-overview';
import { PhilosophyPage } from './pages/philosophy/philosophy';
import { PurposePage } from './pages/purpose/purpose';
import { TopicDetailPage } from './pages/topic-detail/topic-detail';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      { path: '', component: HomePage, title: 'Introduction' },
      { path: 'purpose', component: PurposePage, title: 'Purpose' },
      { path: 'philosophy', component: PhilosophyPage, title: 'Engineering Philosophy' },
      {
        path: 'foundations',
        component: PartOverviewPage,
        title: 'Part I — Foundations',
        data: { partSlug: 'foundations' },
      },
      {
        path: 'sandbox',
        component: PartOverviewPage,
        title: 'Part II — Sandbox Applications',
        data: { partSlug: 'sandbox' },
      },
      {
        path: 'projects',
        component: PartOverviewPage,
        title: 'Part III — Intern Projects',
        data: { partSlug: 'projects' },
      },
      {
        path: 'foundations/:topicSlug',
        component: TopicDetailPage,
        title: 'Foundation Topic',
        data: { partSlug: 'foundations' },
      },
      {
        path: 'sandbox/:topicSlug',
        component: TopicDetailPage,
        title: 'Sandbox Application',
        data: { partSlug: 'sandbox' },
      },
      {
        path: 'projects/:topicSlug',
        component: TopicDetailPage,
        title: 'Intern Project',
        data: { partSlug: 'projects' },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
