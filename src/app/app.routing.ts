import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './examples/landing/landing.component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    // { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
