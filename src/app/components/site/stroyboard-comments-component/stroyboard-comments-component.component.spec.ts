import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StroyboardCommentsComponentComponent } from './stroyboard-comments-component.component';

describe('StroyboardCommentsComponentComponent', () => {
  let component: StroyboardCommentsComponentComponent;
  let fixture: ComponentFixture<StroyboardCommentsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StroyboardCommentsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StroyboardCommentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
