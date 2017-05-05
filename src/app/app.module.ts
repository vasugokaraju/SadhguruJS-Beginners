import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';

import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/styles.css';

//import '../styles/bootstrap/css/bootstrap.min.css';
//import '../styles/bootstrap/js/bootstrap.min.js';


@NgModule({
  imports:      [
      BrowserModule,
      FormsModule
  ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
