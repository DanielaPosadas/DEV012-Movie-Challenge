import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas } from '../interfaces/peliculas';
import { Observable, map } from 'rxjs';
import { ContainerPeliculas } from '../interfaces/peliculas';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( private http: HttpClient) { }

getAllMovies():Observable <Peliculas[]> {
  const URL_API:string = 'https://api.themoviedb.org/3/discover/movie?api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7';
return this.http.get<ContainerPeliculas>(URL_API).pipe(map((resp:any) => {
return resp.results as Peliculas[]}))
}

}
