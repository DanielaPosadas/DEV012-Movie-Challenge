import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Detalle, Generos } from 'src/app/interfaces/peliculas';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  IdMovie: any;
  MovieDetails: Detalle | undefined;
  Genders: Generos[] | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.getIdMovieFromCards();
    this.getDetailmovies(this.IdMovie)
  }

//Método para suscribirme al params (un observable) que me proporcionará el ID de las peliculas
  getIdMovieFromCards(){
  this.route.params.subscribe( respId => {
  this.IdMovie = respId
  })
  }

 //Utilizo el ID que me llegó del componente card para suscribirme al servicio que me trae el detalle de las películas
  getDetailmovies(IdMovie:any){
    this.dataService.getDetailsMovies(IdMovie.id).subscribe((respDetails) => {
    //console.log('El detalle de la pelicula es: ', respDetails)
   console.log('Lo que manda la api es: ', IdMovie)
    this.MovieDetails = respDetails;
    this.Genders = respDetails.genres;
  })}
}
