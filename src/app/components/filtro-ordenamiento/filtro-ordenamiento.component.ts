import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filtro-ordenamiento',
  templateUrl: './filtro-ordenamiento.component.html',
  styleUrls: ['./filtro-ordenamiento.component.scss']
})
export class FiltroOrdenamientoComponent implements OnInit {

  @Output() GeneroSeleccionado = new EventEmitter<any>();
  @Output() OrdenSeleccionado = new EventEmitter<any>();
  @Output() BotonLimpiar = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit(): void {
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

  /*PeliculasDefault(event:MouseEvent){
    this.BotonLimpiar.emit(event)
    console.log("Presionaste el botón")
  }*/


}
