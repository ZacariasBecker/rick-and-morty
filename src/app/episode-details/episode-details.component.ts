import { Component, inject } from '@angular/core';
import { RMapiService } from '../rmapi.service';
import { ActivatedRoute } from '@angular/router';
import { ResultsEpisodeInterface } from '../results-interface';

@Component({
  selector: 'app-episode-details',
  standalone: true,
  imports: [],
  templateUrl: './episode-details.component.html',
  styleUrl: './episode-details.component.css'
})
export class EpisodeDetailsComponent {
  rmapiService: RMapiService = inject(RMapiService);
  route: ActivatedRoute = inject(ActivatedRoute);

  dataEpisode?: ResultsEpisodeInterface;

  constructor() {
    const currentCharactersId = parseInt(this.route.snapshot.params['id'] || 1);
    this.rmapiService.getADetailDataByID<ResultsEpisodeInterface>('episode', currentCharactersId).then((dataCharacter: ResultsEpisodeInterface) => {
      this.dataEpisode = dataCharacter;
    });
  }
}
