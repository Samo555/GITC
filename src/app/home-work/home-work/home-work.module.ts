import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeWorkRoutingModule } from './home-work-routing.module';
import { HomeWorkComponent } from '../home-work.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeWorkComponent
  ],
  imports: [
    CommonModule,
    HomeWorkRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeWorkModule { }
