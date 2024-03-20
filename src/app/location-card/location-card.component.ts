import { Component, Input } from '@angular/core';
import { ResultsLocationInterface } from '../results-interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.css'
})
export class LocationCardComponent {
  @Input() location!: ResultsLocationInterface;

  navigateToLocation = async () => {
    await this.router.navigate(['location', this.location?.id]);
  };

  constructor(private router: Router) { }
}
