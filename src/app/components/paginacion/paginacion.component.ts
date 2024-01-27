import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent implements OnInit {
  //Recibimos información del padre HOME al hijo
 @Input() PActual: number = 1;
 @Input() PTotales: number = 5;
 //Enviamos información del hijo al padre HOME
 @Output() PMovies = new EventEmitter<any>();
 @Output() ChangePage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
     if (this.PTotales > this.PActual) {
      this.PActual = this.PActual + 1;
      }
      this.PMovies.emit(this.PActual);
  }

  prevPage() {
   if (this.PActual > 1) {
          this.PActual = this.PActual - 1;
          this.PMovies.emit(this.PActual);
       }
      }

  cambiarPage(page:number){
    this.PActual = page;
     this.ChangePage.emit(page)
  }
    
}
