import { Component, inject } from '@angular/core';
import { RMapiService } from '../rmapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsCharacterInterface, ResultsEpisodeInterface } from '../results-interface';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.css'
})
export class EpisodeDetailsComponent {
  rmapiService: RMapiService = inject(RMapiService);
  route: ActivatedRoute = inject(ActivatedRoute);

  dataEpisode?: ResultsEpisodeInterface;

  characters?: ResultsCharacterInterface[] = [];

  navigateToLocation = async (url?: string) => {
    console.log(url?.split('character/')[1]);
    await this.router.navigate(['character', url?.split('character/')[1]]);
  };

  constructor(private router: Router) {
    const currentEpisodesId = parseInt(this.route.snapshot.params['id'] || 1);
    this.rmapiService.getADetailDataByID<ResultsEpisodeInterface>('episode', currentEpisodesId).then((dataEpisode: ResultsEpisodeInterface) => {
      this.dataEpisode = dataEpisode;

      let characters = '';
      this.dataEpisode.characters.forEach(character => characters += (character.split('character/')[1] + ','));

      this.rmapiService.getADetailDataByID<ResultsCharacterInterface[]>('character', characters).then((characters: ResultsCharacterInterface[]) => {
        this.characters = characters;
      });

    });
  }

}
