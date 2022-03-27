/*
 * The MIT License
 *
 * Copyright 2022 Martha Ribeiro Locks.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

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
