import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';
import { DataInterface } from '../data-interface';
import { InfoInterface } from '../info-interface';
import { PaginatorComponent } from '../paginator/paginator.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-episodes-page',
  standalone: true,
  imports: [CommonModule, PaginatorComponent],
  templateUrl: './episodes-page.component.html',
  styleUrl: './episodes-page.component.css'
})
export class EpisodesPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataEpisodePage: DataInterface | undefined;
  episodeInfo?: InfoInterface;

  navigateToPage = async (page: number) => {
    await this.router.navigate(['episode', page]);
    const currentEpisodesPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('episode', currentEpisodesPage).then((dataEpisodePage: DataInterface) => {
      this.dataEpisodePage = dataEpisodePage;
    });
  };

  constructor(private router: Router) {
    const currentEpisodesPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('episode', currentEpisodesPage).then((dataEpisodePage: DataInterface) => {
      this.dataEpisodePage = dataEpisodePage;
      this.episodeInfo = dataEpisodePage.info;
      console.log(dataEpisodePage);
    });
  }
}
