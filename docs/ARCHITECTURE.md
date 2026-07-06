# Software Engineering Portfolio Frontend Architecture

## Goals

- Keep content-driven pages easy to read and maintain.
- Separate static data, presentation components, and page orchestration.
- Preserve current behavior while making responsibilities explicit.

## Directory Responsibilities

- `src/app/data`
  - Static portfolio content only.
  - No Angular framework logic.
- `src/app/models`
  - Shared TypeScript contracts for portfolio data.
- `src/app/core/services`
  - App-level services used across pages.
  - `PortfolioContentService` is the single access point to portfolio content.
- `src/app/layout`
  - App shell and persistent layout components (`app-shell`, `sidebar`).
- `src/app/pages`
  - Route-level page components.
  - Compose shared components and request data from services.
- `src/app/shared`
  - Reusable presentational components (`section-header`, `topic-card`, `doc-content`).

## Data and Rendering Flow

1. **Static content source**
   - `portfolio.data.ts` defines immutable content constants and navigation.
2. **Service access**
   - `PortfolioContentService` reads from `portfolio.data.ts` and exposes typed getters.
   - Pages and layout components do not import raw content constants directly.
3. **Page composition**
   - Route components (`home`, `purpose`, `philosophy`, `part-overview`, `topic-detail`) request only the content they need from the service.
   - Pages pass data into shared presentational components via inputs.
4. **Template rendering**
   - Shared components render content without business logic.

## Route Flow

- Routes are defined in `app.routes.ts`.
- Route `data.partSlug` identifies which top-level portfolio part should be loaded.
- `part-overview` and `topic-detail` resolve part/topic content through `PortfolioContentService`.
- `topic-detail` includes a fallback URL parser for safe direct deep-link behavior.

## Component Responsibilities

- `AppComponent`
  - Root router host.
- `AppShellComponent`
  - Persistent shell layout: sidebar + routed content area.
- `SidebarComponent`
  - Renders global navigation.
  - Manages mobile open/close state and collapsible nav groups.
- `HomePageComponent`
  - Landing page summary and links to key sections.
- `PurposePageComponent`
  - Renders portfolio purpose statements.
- `PhilosophyPageComponent`
  - Renders engineering philosophy and documentation framework phases.
- `PartOverviewPageComponent`
  - Renders one top-level part and its topics.
- `TopicDetailPageComponent`
  - Renders detail for a single topic and previous/next navigation.
- `SectionHeaderComponent`, `TopicCardComponent`, `DocContentComponent`
  - Reusable display-only components with input-driven rendering.

## Naming Conventions

- Route and visual classes use explicit suffixes (`*Component`) for clarity.
- Data contracts use nouns (`PortfolioMeta`, `EngineeringPhilosophy`, etc.).
- Services use intent-revealing names (`PortfolioContentService`).

## Maintenance Guidelines

- Add new content in `portfolio.data.ts`.
- Add/adjust data contracts in `portfolio.models.ts` when shape changes.
- Extend `PortfolioContentService` only when multiple pages need shared access patterns.
- Keep shared components stateless and input-driven.
