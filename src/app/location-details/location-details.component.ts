import { Component, inject } from '@angular/core';
import { RMapiService } from '../rmapi.service';
import { ActivatedRoute } from '@angular/router';
import { ResultsLocationInterface } from '../results-interface';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.css'
})
export class LocationDetailsComponent {
  rmapiService: RMapiService = inject(RMapiService);
  route: ActivatedRoute = inject(ActivatedRoute);

  dataLocation?: ResultsLocationInterface;

  constructor() {
    const currentCharactersId = parseInt(this.route.snapshot.params['id'] || 1);
    this.rmapiService.getADetailDataByID<ResultsLocationInterface>('location', currentCharactersId).then((dataLocation: ResultsLocationInterface) => {
      this.dataLocation = dataLocation;
    });
  }
}
