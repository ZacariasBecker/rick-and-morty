import { Component, Input } from '@angular/core';
import { ResultsEpisodeInterface } from '../results-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-episode-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './episode-card.component.html',
  styleUrl: './episode-card.component.css'
})
export class EpisodeCardComponent {
  @Input() episode!: ResultsEpisodeInterface;

  navigateToEpisode = async () => {
    await this.router.navigate(['episode', this.episode?.id]);
  };

  constructor(private router: Router) { }
}
