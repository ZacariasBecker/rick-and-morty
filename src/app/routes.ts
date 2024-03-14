import { Routes } from '@angular/router';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { EpisodesPageComponent } from './episodes-page/episodes-page.component';
import { HomeComponent } from './home/home.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'characters',
        component: CharactersPageComponent,
        title: 'Characters page'
    },
    {
        path: 'characters/:page',
        component: CharactersPageComponent,
        title: 'Characters page'
    },
    {
        path: 'episodes',
        component: EpisodesPageComponent,
        title: 'Episodes page'
    },
    {
        path: 'episodes/:page',
        component: EpisodesPageComponent,
        title: 'Episodes page'
    },
    {
        path: 'locations',
        component: LocationsPageComponent,
        title: 'Location page'
    },
    {
        path: 'locations/:page',
        component: LocationsPageComponent,
        title: 'Location page'
    },
];

export default routeConfig;