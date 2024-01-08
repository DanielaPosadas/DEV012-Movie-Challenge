import { Component, Input, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
 @Input() pelicula: Peliculas | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  
}
