import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrimDirective } from './directives/trim.directive';
import { MyDirDirective } from './directives/my-dir.directive';


const route: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./forms/forms/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'home-work',
    loadChildren: () => import('./home-work/home-work/home-work.module').then(m => m.HomeWorkModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    TrimDirective,
    MyDirDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
