import { Component, inject } from '@angular/core';
import { RMapiService } from '../rmapi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultsCharacterInterface, ResultsLocationInterface } from '../results-interface';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, StarsComponent],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.css'
})
export class LocationDetailsComponent {
  rmapiService: RMapiService = inject(RMapiService);
  route: ActivatedRoute = inject(ActivatedRoute);

  dataLocation?: ResultsLocationInterface;

  residents?: ResultsCharacterInterface[] = [];

  navigateToLocation = async (url?: string) => {
    console.log(url?.split('character/')[1]);
    await this.router.navigate(['character', url?.split('character/')[1]]);
  };

  constructor(private router: Router) {
    const currentCharactersId = parseInt(this.route.snapshot.params['id'] || 1);
    this.rmapiService.getADetailDataByID<ResultsLocationInterface>('location', currentCharactersId).then((dataLocation: ResultsLocationInterface) => {
      this.dataLocation = dataLocation;

      let residents = '';
      this.dataLocation.residents.forEach(resident => residents += (resident.split('character/')[1] + ','));

      this.rmapiService.getADetailDataByID<ResultsCharacterInterface[]>('character', residents).then((residents: ResultsCharacterInterface[]) => {
        this.residents = residents;
      });

    });
  }

}
