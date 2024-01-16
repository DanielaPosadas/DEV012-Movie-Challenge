import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Peliculas } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList: Peliculas[] | undefined;
  PaginaActual: number = 1;
  PaginasTotales: number = 0;
  GeneroSelectID: string = '';
  OrdenOption: string = '';

  constructor( private dataService: DataService) {}

  ngOnInit(): void {
    this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption)
    this.getPagesWithMovies(this.PaginaActual)
  }

 //MÉTODO PARA TRAER LAS PELÍCULAS
  //Obtenemos las películas de acuerdo a los filtros-ordenamientos
  getMoviesFilters(GeneroSelectID:string, PaginaActual:number, OrdenOption:string){
    this.dataService.getMovies(GeneroSelectID, PaginaActual, OrdenOption).subscribe((respMovies) => {
    this.moviesList = respMovies;
  })
  }

  //PARA FILTRAR LAS PELICULAS
  //Nos traemos el valor del option seleccionado
  GeneroSeleccionado(GeneroSelectID:string){
    this.GeneroSelectID = GeneroSelectID;
    this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
    console.log('El género seleccionado es: ', GeneroSelectID)
  }

  //PARA ORDENAR LAS PELICULAS
  OrdenSeleccionado(OrdenOption:string){
      this.OrdenOption = OrdenOption;
      this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
      console.log('El orden seleccionado es: ', OrdenOption)
  }

  //PARA LA PAGINACIÓN
  //Obtenemos las páginas con las películas
  getPagesWithMovies(page:number){
    this.dataService.getPages(page).subscribe((resp) => {
      this.PaginaActual = resp.page;
      this.moviesList = resp.results;
      this.PaginasTotales = resp.total_pages;
    });
  }

  //Nos traemos (del hijo) la página en la que estamos a través del botón prev/next
  //Pasamos ése metodo para conseguir las peliculas por página de acuerdo al genero a través del botón
  PMovies(pagina:number){
    this.PaginaActual = pagina;
      this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption) 
  }

  //Nos traemos (del hijo) la página seleccionada en los botones 1, 2, 3...
  //Pasamos ése metodo para conseguir las peliculas por página de acuerdo al genero por los botones 1, 2, 3...
  ChangePage(pagina:number){
    this.PaginaActual = pagina;
      this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption)
  }

  /*BotonLimpiar(event:any){
    console.log('El botón funciona', event)
    this.GeneroSelectID = '';
    this.OrdenOption = 'popularity.desc';
    this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption)
  }*/

  

}
