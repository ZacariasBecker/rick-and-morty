import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';
import { DataEpisodeInterface } from '../data-interface';
import { InfoInterface } from '../info-interface';
import { PaginatorComponent } from '../paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';

@Component({
  selector: 'app-episodes-page',
  standalone: true,
  imports: [CommonModule, PaginatorComponent, EpisodeCardComponent],
  templateUrl: './episodes-page.component.html',
  styleUrl: './episodes-page.component.css'
})
export class EpisodesPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataEpisodePage?: DataEpisodeInterface;
  episodeInfo?: InfoInterface;

  navigateToPage = async (page: number) => {
    await this.router.navigate(['episodes', page]);
    const currentEpisodesPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID<DataEpisodeInterface>('episode', currentEpisodesPage).then((dataEpisodePage) => {
      this.dataEpisodePage = dataEpisodePage;
    });
  };

  constructor(private router: Router) {
    const currentEpisodesPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID<DataEpisodeInterface>('episode', currentEpisodesPage).then((dataEpisodePage) => {
      this.dataEpisodePage = dataEpisodePage;
      this.episodeInfo = dataEpisodePage.info;
    });

  }
}
