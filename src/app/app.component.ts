import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CharactersPageComponent } from './characters-page/characters-page.component';
import { EpisodesPageComponent } from './episodes-page/episodes-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharactersPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty';
}
