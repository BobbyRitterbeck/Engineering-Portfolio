import { Component, input } from '@angular/core';
import { DocSection } from '../../models/portfolio.models';

@Component({
  selector: 'app-doc-content',
  imports: [],
  templateUrl: './doc-content.html',
  styleUrl: './doc-content.scss',
})
export class DocContentComponent {
  readonly sections = input.required<DocSection[]>();
}
