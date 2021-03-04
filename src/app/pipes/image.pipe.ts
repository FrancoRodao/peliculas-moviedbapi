import { Pipe, PipeTransform } from '@angular/core';
import { PeliculasService } from '../services/peliculas.service';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  constructor(private servicio: PeliculasService){

  }

  transform(value: string): string {

    if(!value){
      return 'assets/no-image.png'
      
    }else{
      return this.servicio.urlImage + value
      
    }

  }

}
