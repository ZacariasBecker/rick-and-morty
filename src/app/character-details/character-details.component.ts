import { Component, inject, Input } from '@angular/core';
import { ResultsCharacterInterface, ResultsEpisodeInterface } from '../results-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, EpisodeCardComponent, StarsComponent],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  rmapiService: RMapiService = inject(RMapiService);
  route: ActivatedRoute = inject(ActivatedRoute);

  dataCharacter?: ResultsCharacterInterface;

  episodes?: ResultsEpisodeInterface[] = [];

  navigateToLocation = async (url?: string) => {
    console.log(url?.split('location/')[1]);
    await this.router.navigate(['location', url?.split('location/')[1]]);
  };

  constructor(private router: Router) {
    const currentCharactersId = parseInt(this.route.snapshot.params['id'] || 1);
    this.rmapiService.getADetailDataByID<ResultsCharacterInterface>('character', currentCharactersId).then((dataCharacter: ResultsCharacterInterface) => {
      this.dataCharacter = dataCharacter;

      let episodes = '';
      this.dataCharacter.episode.forEach(episode => episodes += (episode.split('episode/')[1] + ','));

      this.rmapiService.getADetailDataByID<ResultsEpisodeInterface[]>('episode', episodes).then((episodes: ResultsEpisodeInterface[]) => {
        this.episodes = episodes;
      });

    });
  }

}
