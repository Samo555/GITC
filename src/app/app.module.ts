import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrimDirective } from './directives/trim.directive';
import { MyDirDirective } from './directives/my-dir.directive';
import { HomeChildComponent } from './home/home-child/home-child.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthLoginGuard } from './guard/auth-login.guard';


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
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthLoginGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
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
    MyDirDirective,
    LoginComponent,
    ProfileComponent
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
