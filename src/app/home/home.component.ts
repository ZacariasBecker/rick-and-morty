import { Component, inject } from '@angular/core';
import { StarsComponent } from '../stars/stars.component';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';
import { ResultsCharacterInterface, ResultsEpisodeInterface } from '../results-interface';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarsComponent, CharacterCardComponent, EpisodeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  rmapiService: RMapiService = inject(RMapiService);

  flipCharacters?: ResultsCharacterInterface[];
  exampleEpisode?: ResultsEpisodeInterface;

  constructor() {
    this.rmapiService.getADetailDataByID<ResultsCharacterInterface[]>('character', '1,2').then((dataCharacter: ResultsCharacterInterface[]) => {
      this.flipCharacters = dataCharacter;
    });
    this.rmapiService.getADetailDataByID<ResultsEpisodeInterface>('episode', '1').then((dataEpisode: ResultsEpisodeInterface) => {
      this.exampleEpisode = dataEpisode;
    });
  }

}
