import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RMapiService } from '../rmapi.service';
import { DataCharacterInterface, DataEpisodeInterface } from '../data-interface';

import { CharacterCardComponent } from '../character-card/character-card.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoInterface } from '../info-interface';
import { StarsComponent } from '../stars/stars.component';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, PaginatorComponent, StarsComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataCharacterPage?: DataCharacterInterface;
  characterInfo?: InfoInterface;

  navigateToPage = async (page: number) => {
    await this.router.navigate(['characters', page]);
    const currentCharactersPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getAPageDataByID<DataCharacterInterface>('character', currentCharactersPage).then((dataCharacterPage: DataCharacterInterface) => {
      this.dataCharacterPage = dataCharacterPage;
    });
  };

  constructor(private router: Router) {
    const currentCharactersPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getAPageDataByID<DataCharacterInterface>('character', currentCharactersPage).then((dataCharacterPage: DataCharacterInterface) => {
      this.dataCharacterPage = dataCharacterPage;
      this.characterInfo = dataCharacterPage.info;
    });
  }
}
