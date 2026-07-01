import { Component } from '@angular/core';
import { ENGINEERING_PHILOSOPHY } from '../../data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-philosophy',
  imports: [SectionHeader],
  templateUrl: './philosophy.html',
  styleUrl: './philosophy.scss',
})
export class PhilosophyPage {
  protected readonly philosophy = ENGINEERING_PHILOSOPHY;
}
