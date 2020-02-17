import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryboardItemComponent } from './add-storyboard-item.component';

describe('AddStoryboardItemComponent', () => {
  let component: AddStoryboardItemComponent;
  let fixture: ComponentFixture<AddStoryboardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStoryboardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStoryboardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
