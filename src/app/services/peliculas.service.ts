import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { BuscadorComponent } from '../components/buscador/buscador.component';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  toBack: string = 'home'

  terminoAnterior: string = ''

  private apiKey: string = "4e6b9ea0adc7f6e9c8a2ff0f96a808cc"
  public urlMovieDB: string = "https://api.themoviedb.org/3"
  public urlImage: string = "https://image.tmdb.org/t/p/w500"

  constructor(
    private http: HttpClient,
    private router: Router) { 

  }

  getPopulares(){
    const url = `${this.urlMovieDB}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`

    return this.http.get(url)

  }

  buscarPelicula(texto: string){
    const url = `${this.urlMovieDB}/search/movie?query=${texto}&api_key=${this.apiKey}&language=es&page=1&include_adult=true`

    return this.http.get(url)
  }

  getCartelera(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth()+1;
    var yyyy = hoy.getFullYear();

    var desdeFecha: string = `${yyyy}-${mm}-${dd}`
    var hastaFecha: string = `${yyyy}-${mm}-${dd}`

    const url = `${this.urlMovieDB}/movie/now_playing?api_key=${this.apiKey}&language=es&page=1`
    
    return this.http.get(url)
  }

  getPelicula(id: number){
    const url = `${this.urlMovieDB}/movie/${id}?api_key=${this.apiKey}&language=es`
    
    return this.http.get(url)
  }

  goPelicula(index:number,toback: string){
    this.toBack = toback
    if(this.toBack == 'search'){
      this.router.navigate(['pelicula',index])
      
      
    }else if(this.toBack == 'home'){
      this.router.navigate(['pelicula',index])
    }
  }

}
