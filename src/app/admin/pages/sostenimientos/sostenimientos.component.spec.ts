import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SostenimientosComponent } from './sostenimientos.component';

describe('SostenimientosComponent', () => {
  let component: SostenimientosComponent;
  let fixture: ComponentFixture<SostenimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SostenimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SostenimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
