export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface PurposeItem {
  title: string;
  description: string;
}

export interface DocSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface PortfolioTopic {
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  icon: string;
  sections: DocSection[];
  tags?: string[];
}

export interface PortfolioPart {
  slug: string;
  partNumber: number;
  title: string;
  subtitle: string;
  intro: string[];
  topics: PortfolioTopic[];
}
