import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RMapiService } from '../rmapi.service';
import { DataInterface } from '../data-interface';

import { CharacterCardComponent } from '../character-card/character-card.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoInterface } from '../info-interface';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, PaginatorComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  rmapiService: RMapiService = inject(RMapiService);

  dataCharacterPage: DataInterface | undefined;
  characterInfo?: InfoInterface;

  navigateToPage = async (page: number) => {
    await this.router.navigate(['characters', page]);
    const currentCharactersPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('character', currentCharactersPage).then((dataCharacterPage: DataInterface) => {
      this.dataCharacterPage = dataCharacterPage;
    });
  };

  constructor(private router: Router) {
    const currentCharactersPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('character', currentCharactersPage).then((dataCharacterPage: DataInterface) => {
      this.dataCharacterPage = dataCharacterPage;
      this.characterInfo = dataCharacterPage.info;
    });
  }
}
