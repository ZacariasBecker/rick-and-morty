import { Routes } from '@angular/router';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { EpisodesPageComponent } from './episodes-page/episodes-page.component';
import { HomeComponent } from './home/home.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { LocationDetailsComponent } from './location-details/location-details.component';

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
        path: 'character/:id',
        component: CharacterDetailsComponent,
        title: 'Character details'
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
        path: 'episode/:id',
        component: EpisodeDetailsComponent,
        title: 'Episode details'
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
    {
        path: 'location/:id',
        component: LocationDetailsComponent,
        title: 'Location details'
    },
];

export default routeConfig;