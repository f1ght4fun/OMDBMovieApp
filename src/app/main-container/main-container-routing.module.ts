import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerNavigationComponent } from './components/main-container-navigation/main-container-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: MainContainerNavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContainerRoutingModule {}
