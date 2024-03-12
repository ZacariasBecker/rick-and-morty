import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';
import { DataInterface } from '../data-interface';
import { InfoInterface } from '../info-interface';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [CommonModule, PaginatorComponent],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css'
})
export class LocationCardComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataLocationPage: DataInterface | undefined;
  locationInfo?: InfoInterface;

  navigateToPage = async (page: number) => {
    await this.router.navigate(['location', page]);
    const currentLocationsPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('location', currentLocationsPage).then((dataLocationPage: DataInterface) => {
      this.dataLocationPage = dataLocationPage;
    });
  };

  constructor(private router: Router) {
    const currentLocationsPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('location', currentLocationsPage).then((dataLocationPage: DataInterface) => {
      this.dataLocationPage = dataLocationPage;
      this.locationInfo = dataLocationPage.info;
      console.log(dataLocationPage);
    });
  }
}
