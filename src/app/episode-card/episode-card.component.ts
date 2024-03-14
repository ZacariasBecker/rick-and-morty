import { Component, Input } from '@angular/core';
import { ResultsEpisodeInterface } from '../results-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.css'
})
export class EpisodeCardComponent {
  @Input() episode!: ResultsEpisodeInterface;
}
