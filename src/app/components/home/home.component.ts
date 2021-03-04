import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any[] = []
  carteleraTendencia: any[] = []
  cargando: boolean = true

  imagenes: any[] = ['https://image.tmdb.org/t/p/w500/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg','https://image.tmdb.org/t/p/w500/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg','https://image.tmdb.org/t/p/w500/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg']


  constructor(
    public servicePeliculas: PeliculasService,
    private router: Router) { 

    servicePeliculas.getCartelera().subscribe((data:any)=>{

      for (let index = 0; index < 6; index++) {
        const element = data.results[index];
        this.cartelera.push(element)

      }
      //https://image.tmdb.org/t/p/w500/{{pelicula.backdrop_path}}
    })

    servicePeliculas.getPopulares().subscribe((data:any)=>{
      for (let index = 0; index < 6; index++) {
        const element = data.results[index];
        this.carteleraTendencia.push(element)

      }
    })

    setTimeout(() => {
      this.cargando = false
    }, 500);



  }






  ngOnInit(): void {

  }





}
