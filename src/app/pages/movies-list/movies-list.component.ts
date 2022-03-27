import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MoviesService } from 'src/app/services/movies.service';

export interface Movie {
  id: number,
  cover: string;
  title: string;
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  public tableColumns: string[] = ['cover', 'title'];
  public tableRows: Movie[] = [];
  @ViewChild(MatTable) table: any;

  public now: Date = new Date();

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.loadTableRows();
  }

  private loadTableRows(): void {

    // Fetch movies date from the API
    this.moviesService.getMovies().subscribe(response => {

      const results: [] = response.results;

      if (results) {

        results.forEach((result: any) => {

          // Create movie object
          const movie: Movie = {
            id: result.id,
            cover: `https://image.tmdb.org/t/p/original/${result.poster_path}`,
            title: result.title
          };

          // Add row to table
          this.tableRows.push(movie);
        });

        // Update table
        this.table.renderRows();
      }
    });
  }


}
