import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ContainerPeliculas, Peliculas } from 'src/app/interfaces/peliculas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  moviesList: Peliculas[] | undefined;
  PaginaActual: number = 1;
  PaginasTotales: number = 0;

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.getMoviesData()
    this.getPagesWithMovies(this.PaginaActual)
  }

  getMoviesData(){
    this.dataService.getAllMovies().subscribe((respData) =>
    this.moviesList = respData);
  }

  getPagesWithMovies(page:number){
    this.dataService.getPages(page).subscribe((resp) => {
      console.log("La respuesta es ", resp.page)
      this.PaginaActual = resp.page;
      this.moviesList = resp.results;
      this.PaginasTotales = resp.total_pages;
    });
  }

  PMovies(pagina:number){
    this.getPagesWithMovies(pagina)
    console.log("La página actual desde home es: ", pagina)
  }

  ChangePage(pagina:number){
    this.getPagesWithMovies(pagina)
  }

}
