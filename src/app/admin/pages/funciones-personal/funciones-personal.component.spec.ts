import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionesPersonalComponent } from './funciones-personal.component';

describe('FuncionesPersonalComponent', () => {
  let component: FuncionesPersonalComponent;
  let fixture: ComponentFixture<FuncionesPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionesPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionesPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
