import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas, ContainerPeliculas } from '../interfaces/peliculas';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL_API:string = 'https://api.themoviedb.org/3/discover/movie?api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7';
  constructor( private http: HttpClient) { }

getAllMovies():Observable <Peliculas[]> { 
return this.http.get<ContainerPeliculas>(this.URL_API).pipe(
  map((resp) => {
  return resp.results as Peliculas[]}))
}

getPages(page:number):Observable <ContainerPeliculas> {
  return this.http.get<ContainerPeliculas>(`${this.URL_API}&page=${page}`).pipe(
    map((respPages) => {
      return respPages as ContainerPeliculas}));
}

getMovies(GeneroSelectID:string, PaginaActual:number, OrdenOption:string):Observable <Peliculas[]> {
  return this.http.get<ContainerPeliculas>(`${this.URL_API}&page=${PaginaActual}&sort_by=${OrdenOption}&with_genres=${GeneroSelectID}`).pipe(
    map((respMovies) => {
      return respMovies.results as Peliculas[]}))
}
}
