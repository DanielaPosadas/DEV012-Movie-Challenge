import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas, ContainerPeliculas, Detalle } from '../interfaces/peliculas';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //URL_API:string = 'https://api.themoviedb.org/3/discover/movie?api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7';
  URL_API:string = 'https://api.themoviedb.org/3';
  API_KEY:string = 'api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7';
  constructor( private http: HttpClient) { }

getPages(page:number):Observable <ContainerPeliculas> {
  return this.http.get<ContainerPeliculas>(`${this.URL_API}/discover/movie?${this.API_KEY}&page=${page}`).pipe(
    map((respPages) => {
      return respPages as ContainerPeliculas}));
}

getMovies(GeneroSelectID:string, PaginaActual:number, OrdenOption:string):Observable <Peliculas[]> {
  return this.http.get<ContainerPeliculas>(`${this.URL_API}/discover/movie?${this.API_KEY}&page=${PaginaActual}&sort_by=${OrdenOption}&with_genres=${GeneroSelectID}`).pipe(
    map((respMovies) => {
      return respMovies.results as Peliculas[]}))
}

getDetailsMovies(id:any){
  return this.http.get<Detalle>(`${this.URL_API}/movie/${id}?${this.API_KEY}&language=es-MX`).pipe(map((respDetail) => {
    return respDetail as Detalle}))
}


}
