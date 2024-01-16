import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroOrdenamientoComponent } from './filtro-ordenamiento.component';

describe('FiltroOrdenamientoComponent', () => {
  let component: FiltroOrdenamientoComponent;
  let fixture: ComponentFixture<FiltroOrdenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroOrdenamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltroOrdenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
