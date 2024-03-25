import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';
import { DataLocationInterface } from '../data-interface';
import { InfoInterface } from '../info-interface';
import { PaginatorComponent } from '../paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from '../location-card/location-card.component';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-locations-page',
  standalone: true,
  imports: [CommonModule, LocationCardComponent, PaginatorComponent, StarsComponent],
  templateUrl: './locations-page.component.html',
  styleUrl: './locations-page.component.css'
})
export class LocationsPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataLocationPage?: DataLocationInterface;
  locationInfo?: InfoInterface;

  navigateToPage = async (page: number) => {
    await this.router.navigate(['locations', page]);
    const currentLocationsPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getAPageDataByID<DataLocationInterface>('location', currentLocationsPage).then((dataLocationPage: DataLocationInterface) => {
      this.dataLocationPage = dataLocationPage;
    });
  };

  constructor(private router: Router) {
    const currentLocationsPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getAPageDataByID<DataLocationInterface>('location', currentLocationsPage).then((dataLocationPage: DataLocationInterface) => {
      this.dataLocationPage = dataLocationPage;
      this.locationInfo = dataLocationPage.info;
    });
  }
}
