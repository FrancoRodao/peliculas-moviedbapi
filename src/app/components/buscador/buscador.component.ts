import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  cargando: boolean = false
  forma: FormGroup
  peliculasEncontradas: any[] = []
  imagenes: any[] = []

  descripcionCorta: string

  constructor(
    public formbuilder: FormBuilder,
    public servicio: PeliculasService,
    public activatedRouter: ActivatedRoute) { 

    this.forma = formbuilder.group({
      buscador: [servicio.terminoAnterior]
    })

    this.cargando = true

    activatedRouter.params.subscribe(parametros=>{
      if(parametros['id']){
        servicio.terminoAnterior = parametros.id
        servicio.toBack = 'search'
        this.forma.get('buscador').setValue(servicio.terminoAnterior)
        this.buscarPelicula()
      }else{
        this.buscarPelicula()
      }
    })

  }




  ngOnInit(): void {
  }

  buscarPelicula(){

    this.cargando = true

    if(this.forma.get('buscador').value.length > 0){


      this.servicio.buscarPelicula(this.forma.get('buscador').value).subscribe((data: any)=>{
          this.peliculasEncontradas = []
          for (let index = 0; index < 9; index++) {
            const element = data.results[index];
            
            if(element != undefined){
              this.peliculasEncontradas.push(element)
            }
            
        }
        this.servicio.terminoAnterior = this.forma.get('buscador').value
        setTimeout(() => {
          this.cargando = false
        }, 500);
  
      })

    }else{
      this.cargando = false
    }

  }


}



// if(this.forma.get('buscador').value.length > 0){

//   this.servicio.buscarPelicula(this.forma.get('buscador').value).subscribe((data: any)=>{
//     this.peliculasEncontradas = []
//     if(data.results.length > 0){
//       for (let index = 0; index < 9; index++) {
        
//         const element = data.results[index];
//         if(element.poster_path){
//           this.peliculasEncontradas.push(element)
//         }else{
//           return
//         }
//       }
//     }
//   })

//   this.cargando = true
  

// }
// return

// }