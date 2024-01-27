import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Peliculas } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-filtro-ordenamiento',
  templateUrl: './filtro-ordenamiento.component.html',
  styleUrls: ['./filtro-ordenamiento.component.scss']
})
export class FiltroOrdenamientoComponent implements OnInit {

  optionSelectedFilter: string = '';
  optionSelectedOrder: string = '';

  @Output() GeneroSeleccionado = new EventEmitter<any>();
  @Output() OrdenSeleccionado = new EventEmitter<any>();
  @Output() ParamsCleanBotton = new EventEmitter<any>();  
  

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ParametrosURL()
  }

  //(change) es un evento del DOM aplicado a mi select, por eso se agrega el $event
  //event.target me ayuda a saber el elemento que sufrió el evento
  //y value el valor del option en el que estoy o que selecioné
  GenreSelected(event:any){
  this.GeneroSeleccionado.emit(event.target.value as string)
  }

  OrderSelected(event:any){
  this.OrdenSeleccionado.emit(event.target.value as string)
  }

  //Suscribirme a los parametros de URL para recuperar la option filtro/ordenamiento
  ParametrosURL(){
    this.route.queryParams.subscribe(resParams => {
      this.optionSelectedFilter = resParams['genre'];
      this.optionSelectedOrder = resParams['sortBy'];
    })
  }

  PeliculasDefault(event:MouseEvent){
      this.optionSelectedFilter = '',
      this.optionSelectedOrder = '',
    this.ParamsCleanBotton.emit(event)
  }


}
