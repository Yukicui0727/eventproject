import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecustomerorderComponent } from './deletecustomerorder.component';

describe('DeletecustomerorderComponent', () => {
  let component: DeletecustomerorderComponent;
  let fixture: ComponentFixture<DeletecustomerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecustomerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecustomerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
