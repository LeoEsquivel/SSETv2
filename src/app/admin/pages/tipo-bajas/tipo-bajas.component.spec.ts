import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoBajasComponent } from './tipo-bajas.component';

describe('TipoBajasComponent', () => {
  let component: TipoBajasComponent;
  let fixture: ComponentFixture<TipoBajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoBajasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoBajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
