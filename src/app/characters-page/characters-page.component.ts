import { Component, inject } from '@angular/core';
import { CharacterInterface } from '../character-interface';
import { CommonModule } from '@angular/common';

import { RMapiService } from '../rmapi.service';
import { DataInterface } from '../data-interface';

import { CharacterCardComponent } from '../character-card/character-card.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ActivatedRoute } from '@angular/router';

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

  dataCharacterPage: DataInterface = {};
  paginatorControls: any;

  constructor() {
    const currentCharactersPage = parseInt(this.route.snapshot.params['page'] || 1);
    this.rmapiService.getADataByID('character', currentCharactersPage).then((dataCharacterPage: DataInterface) => {
      this.dataCharacterPage = dataCharacterPage;

      this.paginatorControls = {
        currentPage: currentCharactersPage,
        pages: dataCharacterPage.info?.pages,
        next: dataCharacterPage.info?.next,
        prev: dataCharacterPage.info?.prev
      };

      console.log(this.paginatorControls);

    });
  }
}
