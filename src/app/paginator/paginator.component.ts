import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {

  @Input() paginatorControls: {
    currentPage?: string,
    pages?: number,
    next?: string,
    prev?: string;
  } = {};

  constructor() {
  }
}
