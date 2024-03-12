import { Component, inject } from '@angular/core';
import { InfoInterface } from '../info-interface';
import { DataInterface } from '../data-interface';
import { RMapiService } from '../rmapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [],
  templateUrl: './locations-page.component.html',
  styleUrl: './locations-page.component.css'
})
export class LocationsPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataLocationPage: DataInterface | undefined;
  locationInfo?: InfoInterface;

  constructor(private router: Router) {
    const currentCharactersPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('location', currentCharactersPage).then((dataLocationPage: DataInterface) => {
      this.dataLocationPage = dataLocationPage;
      this.locationInfo = dataLocationPage.info;
      console.log(dataLocationPage);
    });
  }
}

