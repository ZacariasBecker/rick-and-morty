import { Component, Input } from '@angular/core';
import { ResultsCharacterInterface } from '../results-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: ResultsCharacterInterface;
}
