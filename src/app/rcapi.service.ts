import { Injectable } from '@angular/core';
import { CharacterType } from './charactertype';
import { SelectorType } from './selectortype';

@Injectable({
  providedIn: 'root'
})
export class RcapiService {

  url = "https://rickandmortyapi.com/api";

  async getData(selector: SelectorType, page: number): Promise<CharacterType[]> {
    const data = await fetch(`${this.url}/${selector}/?page=${page}`);
    return await data.json() ?? [];
  };

  constructor() { }

}
