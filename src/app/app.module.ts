import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

 