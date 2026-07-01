import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  INTRODUCTION,
  PORTFOLIO_META,
  PORTFOLIO_PARTS,
  PURPOSE_ITEMS,
} from '../../data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';
import { TopicCard } from '../../shared/topic-card/topic-card';

@Component({
  selector: 'app-home',
  imports: [SectionHeader, TopicCard, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomePage {
  protected readonly meta = PORTFOLIO_META;
  protected readonly introduction = INTRODUCTION;
  protected readonly purposeItems = PURPOSE_ITEMS;
  protected readonly parts = PORTFOLIO_PARTS;
}
