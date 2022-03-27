import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  cover: string;
  title: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
  { cover: 'https://avatars.githubusercontent.com/u/89785887?v=4', title: 'Gorduxa' },
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  displayedColumns: string[] = ['cover', 'title'];
  dataSource = ELEMENT_DATA;

  public now: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
