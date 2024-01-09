import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas } from '../interfaces/peliculas';
import { Observable, map, tap } from 'rxjs';
import { ContainerPeliculas } from '../interfaces/peliculas';

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
      return respPages as ContainerPeliculas})
  );
}
}
