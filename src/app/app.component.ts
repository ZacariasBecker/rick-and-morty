import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';


import { CharactersPageComponent } from './characters-page/characters-page.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CharactersPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rick-and-morty';
}
