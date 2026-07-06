import { Injectable } from '@angular/core';
import {
  ENGINEERING_PHILOSOPHY,
  INTRODUCTION,
  NAVIGATION,
  PORTFOLIO_META,
  PORTFOLIO_PARTS,
  PURPOSE_ITEMS,
} from '../../data/portfolio.data';
import {
  EngineeringPhilosophy,
  NavItem,
  PortfolioIntroduction,
  PortfolioMeta,
  PortfolioPart,
  PortfolioTopic,
  PurposeItem,
} from '../../models/portfolio.models';

/**
 * Single access point for portfolio content.
 * Keeping reads here avoids sprinkling direct data imports across many components.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  getMeta(): PortfolioMeta {
    return PORTFOLIO_META;
  }

  getIntroduction(): PortfolioIntroduction {
    return INTRODUCTION;
  }

  getPurposeItems(): PurposeItem[] {
    return PURPOSE_ITEMS;
  }

  getPhilosophy(): EngineeringPhilosophy {
    return ENGINEERING_PHILOSOPHY;
  }

  getNavigation(): NavItem[] {
    return NAVIGATION;
  }

  getParts(): PortfolioPart[] {
    return PORTFOLIO_PARTS;
  }

  getPartBySlug(slug: string): PortfolioPart | undefined {
    return PORTFOLIO_PARTS.find((part) => part.slug === slug);
  }

  getTopicBySlug(partSlug: string, topicSlug: string): PortfolioTopic | undefined {
    const part = this.getPartBySlug(partSlug);
    return part?.topics.find((topic) => topic.slug === topicSlug);
  }
}
