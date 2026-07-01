import { Component } from '@angular/core';
import { PURPOSE_ITEMS } from '../../data/portfolio.data';
import { SectionHeader } from '../../shared/section-header/section-header';

@Component({
  selector: 'app-purpose',
  imports: [SectionHeader],
  templateUrl: './purpose.html',
  styleUrl: './purpose.scss',
})
export class PurposePage {
  protected readonly purposeItems = PURPOSE_ITEMS;
}
