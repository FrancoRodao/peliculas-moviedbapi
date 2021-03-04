import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { ImagePipe } from './pipes/image.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md'








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscadorComponent,
    PeliculaComponent,
    NavbarComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    CarouselModule,
    WavesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
