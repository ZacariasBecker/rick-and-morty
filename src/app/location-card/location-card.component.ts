import { Component, Input } from '@angular/core';
import { ResultsLocationInterface } from '../results-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css'
})
export class LocationCardComponent {
  @Input() location!: ResultsLocationInterface;
}
