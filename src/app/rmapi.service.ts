import { Injectable } from '@angular/core';
import { SelectorType } from './selectortype';
import { DataInterface } from './data-interface';

@Injectable({
  providedIn: 'root'
})
export class RMapiService {

  url = "https://rickandmortyapi.com/api";

  async getADataByID(selector: SelectorType, page: number): Promise<DataInterface> {
    const data = await fetch(`${this.url}/${selector}/?page=${page}`);
    return await data.json();
  };

  constructor() { }
}
