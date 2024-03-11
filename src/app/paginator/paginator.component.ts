import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { InfoInterface } from '../info-interface';


@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  @Input() paginatorInfo?: InfoInterface;
  @Output() newItemEvent = new EventEmitter<number>();

  pageValues: number[] = [];
  numberOfPages: number = 10;
  currentPage: number;

  navigateToPage = (page: number) => {
    this.currentPage = page;
    this.newItemEvent.emit(page);
  };

  setPreviousPagesValues = () => {
    let newPageValues: number[] = [];
    for (let i = 0; i < this.numberOfPages; i++) {
      if (this.currentPage - i > 0) {
        newPageValues.unshift(this.currentPage - i);
      } else {
        newPageValues.push(newPageValues[newPageValues.length - 1] + 1);
      }
    }
    this.pageValues = newPageValues;
    this.navigateToPage(this.pageValues[0]);
  };

  setNextPagesValues = () => {
    let newPageValues: number[] = [];
    for (let i = 0; i < this.numberOfPages; i++) {
      if (this.pageValues[i] + this.numberOfPages <= (this.paginatorInfo?.pages || 1)) {
        newPageValues.push(this.pageValues[i] + this.numberOfPages);
      }
    }
    this.pageValues = newPageValues;
    this.navigateToPage(this.pageValues[0]);
  };

  constructor() {
    this.currentPage = parseInt(this.route.snapshot.params['page'] || 1);
    for (let i = this.currentPage - 1; i < this.currentPage + this.numberOfPages - 1; i++) {
      this.pageValues.push(i + 1);
    }
  }
}
