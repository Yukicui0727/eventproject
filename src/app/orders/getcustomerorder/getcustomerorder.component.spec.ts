import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcustomerorderComponent } from './getcustomerorder.component';

describe('GetcustomerorderComponent', () => {
  let component: GetcustomerorderComponent;
  let fixture: ComponentFixture<GetcustomerorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetcustomerorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcustomerorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
