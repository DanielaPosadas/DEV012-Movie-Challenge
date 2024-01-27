import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComponent } from './detalle.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Detalle, Peliculas } from 'src/app/interfaces/peliculas';
import { DataService } from 'src/app/services/data.service';

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

const mockedDataService: {
  getAllMovies: () => Observable<Peliculas[]>,
  getMovies: () => Observable<Peliculas[]>,
  getDetailsMovies: () => Observable<Detalle>,
} = {
  getAllMovies: () => of([]),
  getMovies: () => of([]),
  getDetailsMovies: () => of(mockDetalle),
}

describe('DetalleComponent', () => {
  let component: DetalleComponent;
  let fixture: ComponentFixture<DetalleComponent>;
  let activatedRouteMock: ActivatedRoute;
  let routerMock: Router;
  let dataServiceMock: DataService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleComponent ],
      imports: [ HttpClientTestingModule , RouterTestingModule ],
      providers: [
        {
        provide: ActivatedRoute,
        useValue: {
          params: of({id: '623911'})
        }
      },
      {
        provide: DataService,
        useValue: mockedDataService,
      }]
    })
    .compileComponents();

    activatedRouteMock = TestBed.inject(ActivatedRoute);
    routerMock = TestBed.inject(Router);
    dataServiceMock = TestBed.inject(DataService);

  
    fixture = TestBed.createComponent(DetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create detalle component', () => {
    expect(component).toBeTruthy();
  });

 it('should suscribe to params to get id value, getIdMovieFromCards()', () => {
    const valueID = '623911';

    component.getIdMovieFromCards();
    activatedRouteMock.params.subscribe(resParams => {
      expect(resParams['id']).toEqual(valueID);
    })
  });

  it('should call getDetailsMovies() on service, getDetailmovies()', () => {
    const valueID = '623911';

    const getDetailsMoviesSpy = spyOn(mockedDataService, 'getDetailsMovies');
    getDetailsMoviesSpy.and.returnValue(of(mockDetalle))

    component.getDetailmovies(valueID);
    expect(mockedDataService.getDetailsMovies).toHaveBeenCalled();
  });

});
