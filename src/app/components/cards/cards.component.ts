import { Component, Input, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  //Input es un decorador. Envía información de padre a hijo (Home->Cards)
 @Input() pelicula: Peliculas | undefined; //Pelicula es de tipo Peliculas
  constructor() { }

  ngOnInit(): void {
  }
  
}
