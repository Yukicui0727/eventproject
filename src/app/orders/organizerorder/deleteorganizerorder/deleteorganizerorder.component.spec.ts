import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteorganizerorderComponent } from './deleteorganizerorder.component';

describe('DeleteorganizerorderComponent', () => {
  let component: DeleteorganizerorderComponent;
  let fixture: ComponentFixture<DeleteorganizerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteorganizerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteorganizerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
