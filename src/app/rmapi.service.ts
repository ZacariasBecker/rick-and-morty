import { Injectable } from '@angular/core';
import { SelectorType } from './selectortype';

@Injectable({
  providedIn: 'root'
})
export class RMapiService {

  url = "https://rickandmortyapi.com/api";

  async getADataByID<T>(selector: SelectorType, page: number): Promise<T> {
    const data = await fetch(`${this.url}/${selector}/?page=${page}`);
    return await data.json();
  };

  constructor() { }
}
