import { Component, Input } from '@angular/core';
import { CharacterInterface } from '../results-character-interface';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.css'
})
export class CharacterCardComponent {
  @Input() character!: CharacterInterface;
}
