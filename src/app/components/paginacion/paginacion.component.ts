import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.scss']
})
export class PaginacionComponent implements OnInit {
  //Recibimos información del padre al hijo
 @Input() PActual: number = 1;
 @Input() PTotales: number = 0;
 //Enviamos información del hijo al padre
 @Output() PMovies = new EventEmitter<any>();
 @Output() ChangePage = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
     if (this.PActual < this.PTotales) {
      this.PActual = this.PActual + 1;
      }
      this.PMovies.emit(this.PActual);
      console.log("La página actual es ", this.PActual)
  }
  prevPage() {
   if (this.PActual > 1) {
          this.PActual = this.PActual - 1;
          this.PMovies.emit(this.PActual);
       }
       console.log("La página actual es ", this.PActual)
      }

  cambiarPage(page:number){
     this.ChangePage.emit(page)
  }
    
}
