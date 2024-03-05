import { Component, inject } from '@angular/core';
import { CharacterInterface } from '../character-interface';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from '../character-card/character-card.component';

import { RMapiService } from '../rmapi.service';
import { DataInterface } from '../data-interface';


@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [CommonModule, CharacterCardComponent],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.css'
})
export class CharactersPageComponent {

  dataCharacterPage: DataInterface = {};

  rmapiService: RMapiService = inject(RMapiService);

  constructor() {
    this.rmapiService.getADataByID('character', 1).then((dataCharacterPage: DataInterface) => {
      this.dataCharacterPage = dataCharacterPage;
    });
  }
}
