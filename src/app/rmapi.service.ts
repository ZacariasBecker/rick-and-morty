import { Injectable } from '@angular/core';
import { SelectorType } from './selectortype';

@Injectable({
  providedIn: 'root'
})
export class RMapiService {

  url = "https://rickandmortyapi.com/api";

  async getAPageDataByID<T>(selector: SelectorType, page: number): Promise<T> {
    const data = await fetch(`${this.url}/${selector}/?page=${page}`);
    return await data.json();
  };
  async getADetailDataByID<T>(selector: SelectorType, id: number): Promise<T> {
    const data = await fetch(`${this.url}/${selector}/${id}`);
    return await data.json();
  };

  constructor() { }
}
