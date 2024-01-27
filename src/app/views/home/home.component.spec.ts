import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let activatedRouteMock: ActivatedRoute;
  let routerMock: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ], //Agregamos el router para habilitar las pruebas relacionadas con el enrutamiento
      declarations: [ HomeComponent ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({genre: 'value1'}),
        }
      },{
        provide: DataService,
        useValue: mockedDataService,
      }],
    })
    .compileComponents();

    activatedRouteMock = TestBed.inject(ActivatedRoute);
    routerMock = TestBed.inject(Router);


    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Home component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllMovies() on service, getMoviesData()', () => {
    const getAllMoviesSpy = spyOn(mockedDataService, 'getAllMovies');
    getAllMoviesSpy.and.returnValue(of([]))
    component.getMoviesData();
    expect(mockedDataService.getAllMovies).toHaveBeenCalled();
  });

  it('should call getMovies() on service, getMoviesFilters()', () => {
    const valueID = '';
    const valuePage = 0;
    const valueOrder = '';
    const getMoviesSpy = spyOn(mockedDataService, 'getMovies');
    getMoviesSpy.and.returnValue(of([]))
    component.getMoviesFilters(valueID, valuePage, valueOrder);
    expect(mockedDataService.getMovies).toHaveBeenCalled();
  });

  it('should assign GeneroSelectID correctly, GeneroSeleccionado()', () => {
    const valueID = '28';
    component.GeneroSeleccionado(valueID);
    expect(component.GeneroSelectID).toEqual(valueID);
  });

  it('should assign OrdenOption correctly, OrdenSeleccionado()', () => {
    const valueOrden = 'popularity.desc';
    component.OrdenSeleccionado(valueOrden);
    expect(component.OrdenOption).toEqual(valueOrden);
  });

  it('should assign PaginaActual correctly, PMovies()', () => {
    const valuePage = 1;
    component.PMovies(valuePage);
    expect(component.PaginaActual).toEqual(valuePage);
  });

  it('should assign PaginaActual correctly, ChangePage()', () => {
    const valuePage = 1;
    component.ChangePage(valuePage);
    expect(component.PaginaActual).toEqual(valuePage);
  });

  it('should suscribe to params to get URL params, PasarParametrosURL()', () => {
    const valueParams = 'value1';
    activatedRouteMock.queryParams.subscribe(respParams => {
    expect(respParams['genre']).toEqual(valueParams);
    })
  });

  it('should pass parameters to a route through queryParams, GuardarParametrosURL()', () => {
    const valueID = '';
    const valuePage = 0;
    const valueOrder = '';
    const routerSpy = spyOn(routerMock, 'navigate');
    component.GuardarParametrosURL(valueID, valueOrder, valuePage);
    expect(routerSpy).toHaveBeenCalledWith([''], {queryParams: {'genre': valueID, 'sortBy': valueOrder, 'page': valuePage}});
  });

  it('should pass parameters to a route through queryParams, ParamsCleanBotton()', () => {
    const valueID = '';
    const valuePage = 1;
    const valueOrder = 'popularity.desc';
    const routerSpy = spyOn(routerMock, 'navigate');
    component.ParamsCleanBotton(valueID);
    expect(routerSpy).toHaveBeenCalledWith([''], {queryParams: {'genre': valueID, 'sortBy': valueOrder, 'page': valuePage}});
  });



});
