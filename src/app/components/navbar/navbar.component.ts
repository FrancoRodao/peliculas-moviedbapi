import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(
    private router: Router,
    private servicio: PeliculasService,
    ) { }

  ngOnInit(): void {
  }

  buscar(termino: string){
    this.servicio.terminoAnterior = termino
    this.router.navigate(['buscador',termino])
  }



}
