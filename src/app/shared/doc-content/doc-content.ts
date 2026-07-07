import { Component, input } from '@angular/core';
import { DocSection } from '../../models/portfolio.models';
import { scrollToSectionId, toSectionId } from '../utils/section-id.util';

@Component({
  selector: 'app-doc-content',
  imports: [],
  templateUrl: './doc-content.html',
  styleUrl: './doc-content.scss',
})
export class DocContentComponent {
  readonly sections = input.required<DocSection[]>();
  readonly showToc = input(true);

  sectionId(title: string, index: number): string {
    return toSectionId(title, index);
  }

  scrollToSection(title: string, index: number): void {
    scrollToSectionId(this.sectionId(title, index));
  }
}
