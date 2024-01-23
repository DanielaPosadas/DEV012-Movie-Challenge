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

  it('Debería crear el componente Filtro-Ordenamiento', () => {
    expect(component).toBeTruthy();
  });

  it('Debería devolver el valor 28 al seleccionar Acción ', () => {
    const valorEsperado = '28';
    spyOn(component.GeneroSeleccionado, 'emit');

    const selectElement: HTMLSelectElement = fixture.nativeElement.querySelector('select');
    selectElement.value = valorEsperado;
    selectElement.dispatchEvent(new Event('change'));

    expect(component.GeneroSeleccionado.emit).toHaveBeenCalledWith(valorEsperado);
  });
  
});
