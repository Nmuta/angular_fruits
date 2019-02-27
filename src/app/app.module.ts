import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import {HttpClientModule}  from '@angular/common/http';
import { ReplaceUnderscoresPipe } from './underscores.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    ReplaceUnderscoresPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
