import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Peliculas } from 'src/app/interfaces/peliculas';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList: Peliculas[] | undefined;
  PaginaActual: number = 0;
  GeneroSelectID: string = '';
  OrdenOption: string = '';
  CleanFilter:string = '';
  CleanOrder:string = '';

  constructor( private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.PasarParametrosURL()
      this.getMoviesData()
      this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
      this.GuardarParametrosURL(this.GeneroSelectID, this.OrdenOption, this.PaginaActual);
  }

  //MÉTODO PARA TRAER LAS PELÍCULAS POR DEFAULT
  getMoviesData(){
    this.dataService.getAllMovies().subscribe((respData) => {
    this.moviesList = respData});
  }

 //MÉTODO PARA TRAER LAS PELÍCULAS CON PARÁMETROS
  getMoviesFilters(GeneroSelectID:string, PaginaActual:number, OrdenOption:string){
    this.dataService.getMovies(GeneroSelectID, PaginaActual, OrdenOption).subscribe((respMovies) => {
    this.moviesList = respMovies;
  })
  }

  //PARA FILTRAR LAS PELICULAS
  GeneroSeleccionado(GeneroSelectID:string){
    this.GeneroSelectID = GeneroSelectID;
    this.GuardarParametrosURL(this.GeneroSelectID, this.OrdenOption, this.PaginaActual)
    this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
  }

  //PARA ORDENAR LAS PELICULAS
  OrdenSeleccionado(OrdenOption:string){
      this.OrdenOption = OrdenOption;
      this.GuardarParametrosURL(this.GeneroSelectID, this.OrdenOption, this.PaginaActual)
      this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
  }

  //PARA LA PAGINACIÓN
  //Nos traemos (del hijo) la página en la que estamos a través del botón prev/next
  PMovies(pagina:number){
    this.PaginaActual = pagina;
    this.GuardarParametrosURL(this.GeneroSelectID, this.OrdenOption, this.PaginaActual);
    this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
  }

  //Nos traemos (del hijo) la página seleccionada en los botones 1, 2, 3...
  ChangePage(pagina:number){
   this.PaginaActual = pagina;
   this.GuardarParametrosURL(this.GeneroSelectID, this.OrdenOption, this.PaginaActual);
   this.getMoviesFilters(this.GeneroSelectID, this.PaginaActual, this.OrdenOption);
  }

  //QUERYPARAMS PARA MANTENER FILTROS Y ORDENAMIENTOS
  GuardarParametrosURL(GeneroSelectID:string, OrdenOption:string, PaginaActual:Number){
    this.router.navigate([''], {
      queryParams: {'genre': GeneroSelectID, 'sortBy': OrdenOption, 'page': PaginaActual},
    })
  }

  //QNOS SUSCRIBIRMOS AL OBSERVABLE QUERYPARAMS PARA ASIGNAR VALORES
  PasarParametrosURL(){
    this.route.queryParams.subscribe(respParams => {
      this.GeneroSelectID = respParams['genre'] || '';
      this.OrdenOption = respParams['sortBy'] || 'popularity.desc';
      this.PaginaActual = respParams['page'] || 1;
    })
  }

  //LIMPIAR BOTÓN
  ParamsCleanBotton(event:any){
    console.log('click al botón', event)
    this.getMoviesData();
    this.router.navigate([''], {
      queryParams: {'genre': '', 'sortBy': 'popularity.desc', 'page': 1},
    })
  }

  

}
