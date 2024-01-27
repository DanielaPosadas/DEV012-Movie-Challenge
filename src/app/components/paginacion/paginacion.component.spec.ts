import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginacionComponent } from './paginacion.component';

describe('PaginacionComponent', () => {
  let component: PaginacionComponent;
  let fixture: ComponentFixture<PaginacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a paginacionComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should return a number less than 5, nextPage()', () => {
    component.PActual = 1;
    component.PTotales = 5;
    component.nextPage();
    expect(component.PActual).toBeLessThan(5);
  });

  it('should return 3, prevPage()', () => {
    spyOn(component.PMovies, 'emit');
    component.PActual = 4;
    component.prevPage();
    expect(component.PActual).toEqual(3);
    expect(component.PMovies.emit).toHaveBeenCalledWith(component.PActual)
  });

  it('should ChangePage emit an event when calling cambiarPage, cambiarPage(page:number)', () => {
    spyOn(component.ChangePage, 'emit')
    const pageNum = 2;
    component.cambiarPage(pageNum);
    expect(component.ChangePage.emit).toHaveBeenCalledWith(pageNum);
  });
});
