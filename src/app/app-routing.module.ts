import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [

  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'buscador', pathMatch: 'full', component: BuscadorComponent },
  { path: 'buscador/:id', pathMatch: 'full', component: BuscadorComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
