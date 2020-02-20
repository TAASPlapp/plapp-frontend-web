import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselStoryboardComponent } from './carusel-storyboard.component';

describe('CaruselStoryboardComponent', () => {
  let component: CaruselStoryboardComponent;
  let fixture: ComponentFixture<CaruselStoryboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruselStoryboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselStoryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
