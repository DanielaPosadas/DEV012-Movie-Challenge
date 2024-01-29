import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataService } from './data.service';
import { Peliculas } from '../interfaces/peliculas';

const mockPeliculas: Peliculas[] = [{
  "adult": false,
  "backdrop_path": "",
  "genre_ids": [],
  "id": 787699,
  "original_language": "",
  "original_title": "",
  "overview": "",
  "popularity": 0,
  "poster_path": "",
  "release_date": "",
  "title": "",
  "video": false,
  "vote_average": 0,
  "vote_count": 0
}]

const mockDetalle = {
  "adult": false,
  "backdrop_path": "",
  "genres": [],
  "homepage": "",
  "id": 0,
  "imdb_id": "",
  "original_language": "",
  "original_title": "",
  "overview": "",
  "popularity": 0,
  "poster_path": "",
  "release_date": "",
  "revenue": 0,
  "runtime": 0,
  "spoken_languages": [],
  "title": "",
  "vote_average": 0,
  "vote_count": 0
}

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() =>{
    httpMock.verify(); //verifica que no haya solicitudes pendientes al final de cada prueba
  })

  it('should be create a service', () => {
    expect(service).toBeTruthy();
  });

 it('should bring an array of movies from api TMDB, getAllMovies()', () => {
    const expectedResponse = {
    "page": 1,
    "results": mockPeliculas,
    "total_pages": 0,
    "total_results": 0
    }

    const mockURL = 'https://api.themoviedb.org/3/discover/movie?api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7';

    service.getAllMovies().subscribe(respMovies => {
    expect(respMovies).toEqual(mockPeliculas);
    })

    const req = httpMock.expectOne(mockURL); //Se espera que realice una solicitud HTTP a la URL correcta.
    req.flush(expectedResponse); //flush se utiliza para simular la respuesta esperada.
});

it('should bring an array of movies from api TMDB with filter/order/page, getMovies()', () => {
  const expectedResponse = {
  "page": 1,
  "results": mockPeliculas,
  "total_pages": 0,
  "total_results": 0
  }
  const mockURL = 'https://api.themoviedb.org/3/discover/movie?api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7&page=1&sort_by=popularity.desc&with_genres=28';
  const filter = '28';
  const order = 'popularity.desc';
  const page = 1;

  service.getMovies(filter, page, order).subscribe(respMovies => {
  expect(respMovies).toEqual(mockPeliculas);
  })

  const req = httpMock.expectOne(mockURL);
  req.flush(expectedResponse);
});

it('should bring an object with details of a movie from api TMDB, getDetailsMovies()', () => {
  
  const mockURL = 'https://api.themoviedb.org/3/movie/787699?api_key=68cb6c0f124ef52c1af4b53d4ecf2ec7&language=es-MX'
  const ID = '787699';

  service.getDetailsMovies(ID).subscribe(respMovies => {
  expect(respMovies).toEqual(mockDetalle);
  })

  const req = httpMock.expectOne(mockURL);
  req.flush(mockDetalle);
});

});
