import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainContainerModule } from '../main-container/main-container.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule, //
    FormsModule,
    MainRoutingModule,
    MainContainerModule
  ]
})
export class MainModule {}
