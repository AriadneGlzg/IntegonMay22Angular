import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallepersonaComponent } from './detallepersona.component';

describe('DetallepersonaComponent', () => {
  let component: DetallepersonaComponent;
  let fixture: ComponentFixture<DetallepersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallepersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallepersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
