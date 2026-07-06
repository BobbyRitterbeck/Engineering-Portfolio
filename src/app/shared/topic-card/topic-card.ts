import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topic-card',
  imports: [RouterLink],
  templateUrl: './topic-card.html',
  styleUrl: './topic-card.scss',
})
export class TopicCardComponent {
  readonly title = input.required<string>();
  readonly summary = input.required<string>();
  readonly link = input.required<string>();
  readonly subtitle = input<string>();
  readonly tags = input<string[]>([]);
  readonly partLabel = input<string>();
}
