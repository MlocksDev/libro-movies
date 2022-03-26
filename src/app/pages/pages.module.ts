import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AppMaterialModule } from '../app-material.module';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    MoviesListComponent,
    MoviesDetailsComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ComponentsModule
  ]
})
export class PagesModule { }
