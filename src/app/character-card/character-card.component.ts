import { Component, inject, Input } from '@angular/core';
import { ResultsCharacterInterface } from '../results-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: ResultsCharacterInterface;

  navigateToCharacter = async () => {
    await this.router.navigate(['character', this.character?.id]);
  };

  constructor(private router: Router) { }
}
