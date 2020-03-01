import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSeatComponent } from './delete-seat.component';

describe('DeleteSeatComponent', () => {
  let component: DeleteSeatComponent;
  let fixture: ComponentFixture<DeleteSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
