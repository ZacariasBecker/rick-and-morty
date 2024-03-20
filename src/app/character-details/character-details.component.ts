import { Component, inject, Input } from '@angular/core';
import { ResultsCharacterInterface } from '../results-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { RMapiService } from '../rmapi.service';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  rmapiService: RMapiService = inject(RMapiService);
  route: ActivatedRoute = inject(ActivatedRoute);

  dataCharacter?: ResultsCharacterInterface;

  constructor() {
    const currentCharactersId = parseInt(this.route.snapshot.params['id'] || 1);
    this.rmapiService.getADetailDataByID<ResultsCharacterInterface>('character', currentCharactersId).then((dataCharacter: ResultsCharacterInterface) => {
      this.dataCharacter = dataCharacter;
    });
  }
}
