import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieListModule } from './../movie-list/movie-list.module';
import { MainContainerNavigationComponent } from './components/main-container-navigation/main-container-navigation.component';
import { MainContainerRoutingModule } from './main-container-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, MainContainerRoutingModule, MovieListModule],
  declarations: [MainContainerNavigationComponent],
  exports: [MainContainerNavigationComponent]
})
export class MainContainerModule {}
