import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  id: number
  imgPelicula: string
  descripcionPelicula: string
  tituloPelicula: string

  constructor(
    private router: ActivatedRoute,
    public servicePeliculas: PeliculasService) { 

    router.params.subscribe(data=>{
      this.id = data.id
    })

    if(this.id != undefined){
      this.getPelicula(this.id)
    }

  }

  getPelicula(id: number){
    this.servicePeliculas.getPelicula(id).subscribe((data: any)=>{
      this.imgPelicula = `${data.poster_path}`
      this.descripcionPelicula = data.overview
      this.tituloPelicula = data.title

    })
  }

  ngOnInit(): void {
  }

}
