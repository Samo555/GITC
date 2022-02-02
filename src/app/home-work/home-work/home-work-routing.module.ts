import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWorkComponent } from '../home-work.component';

const routes: Routes = [{
  path: '',
  component: HomeWorkComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeWorkRoutingModule { }
