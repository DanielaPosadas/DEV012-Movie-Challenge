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
  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.getMoviesData()
  }

  getMoviesData(){
    this.dataService.getAllMovies().subscribe((respData) => this.moviesList = respData);
  }

}
