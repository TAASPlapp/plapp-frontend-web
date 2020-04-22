import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StroyboardCommentsComponent } from './stroyboard-comments.component';

describe('StroyboardCommentsComponentComponent', () => {
  let component: StroyboardCommentsComponent;
  let fixture: ComponentFixture<StroyboardCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StroyboardCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StroyboardCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
