import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  let routerMock: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsComponent ],
      imports: [ RouterTestingModule ],
    })
    .compileComponents();

    routerMock = TestBed.inject(Router);

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create cards component', () => {
    expect(component).toBeTruthy();
  });

  it('should get an "string id", onSelect()', () => {
    const valueID = '2208';
    const eventMock = new MouseEvent('click');
    const onSelectSpy = spyOn(component, 'onSelect')
    const selectedElement = fixture.nativeElement.querySelector('.card.container');
    selectedElement.dispatchEvent(eventMock);

    component.onSelect(valueID);
    
    expect(onSelectSpy).toHaveBeenCalledWith(valueID);
  });

  it('should pass an "string id" through router, onSelect()', () => {
    const valueID = '2208';
    const routerSpy = spyOn(routerMock, 'navigate');

    component.onSelect(valueID);
    
    expect(routerSpy).toHaveBeenCalledWith(['/detalle', valueID]);
  });

  it('should pass an "event true" when an image is not found, NotFound()', () => {
    const eventMock = new ErrorEvent('error');
    const selectedElement = fixture.nativeElement.querySelector('img');
    
    const originalImage = 'original_image.jpg';
    selectedElement.src = originalImage;
    selectedElement.dispatchEvent(eventMock)
    
    component.NotFound(eventMock);

    const newImage = 'https://asean.org/wp-content/uploads/2022/07/No-Image-Placeholder.svg.png';
    
    expect(selectedElement.src).toEqual(newImage);
  });
});
