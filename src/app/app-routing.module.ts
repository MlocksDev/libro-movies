import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDetailsComponent } from './pages/movies-details/movies-details.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: "",
    component: MoviesListComponent
  }, {
    path: "details",
    component: MoviesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
