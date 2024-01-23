import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Peliculas } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  idMovie: number = 0;

  //Input es un decorador. Envía información de padre a hijo (Home->Cards)
 @Input() pelicula: Peliculas | undefined; //Pelicula es de tipo Peliculas

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //el evento (error) en el elemento img se dispara automáticamente cuando ocurrió un error al cargar la imagen
  NotFound(event:any){
    event.target.src = "https://asean.org/wp-content/uploads/2022/07/No-Image-Placeholder.svg.png"
  }

   //Método para obtener el id de la película al hacer click
  onSelect(id:any){
  this.idMovie = id;
  this.router.navigate(['/detalle', this.idMovie]) //Envío ése parámetro ID a través del router
  }
}
