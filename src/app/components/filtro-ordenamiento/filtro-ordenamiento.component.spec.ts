import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroOrdenamientoComponent } from './filtro-ordenamiento.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FiltroOrdenamientoComponent', () => {
  let component: FiltroOrdenamientoComponent;
  let fixture: ComponentFixture<FiltroOrdenamientoComponent>;
  let activatedRouteMock: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroOrdenamientoComponent ],
      imports: [ RouterTestingModule ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          queryParams: of({}),
        }
      }]
    })
    .compileComponents();

    activatedRouteMock = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(FiltroOrdenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create Filtro-Ordenamiento component', () => {
    expect(component).toBeTruthy();
  });

  it('Should return 28 to select Accion, GenreSelected()', () => {
    const value = '28';
    const eventMock = new Event('change');
    spyOn(component.GeneroSeleccionado, 'emit');

    const selectElement = fixture.nativeElement.querySelector('.form-select.filter');
    selectElement.value = value;
    selectElement.dispatchEvent(eventMock);

    expect(component.GeneroSeleccionado.emit).toHaveBeenCalledWith(value);
  });

  it('Should return "popularity.asc" to select "Menor popularidad", OrderSelected()', () => {
    const value = 'popularity.asc';
    const eventMock = new Event('change');
    spyOn(component.OrdenSeleccionado, 'emit');

    const selectElement = fixture.nativeElement.querySelector('.form-select.order')
    selectElement.value = value;
    selectElement.dispatchEvent(eventMock);
    
    expect(component.OrdenSeleccionado.emit).toHaveBeenCalledWith(value);
  });

  it('Should return a "mouseClick event", PeliculasDefault()', () => {
    const eventMock = new MouseEvent('click');
    spyOn(component.ParamsCleanBotton, 'emit');

    const selectElement = fixture.nativeElement.querySelector('button')
    selectElement.dispatchEvent(eventMock);
    
    expect(component.ParamsCleanBotton.emit).toHaveBeenCalledWith(eventMock);
  });
  
});
