import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNivelesComponent } from './editar-niveles.component';

describe('EditarNivelesComponent', () => {
  let component: EditarNivelesComponent;
  let fixture: ComponentFixture<EditarNivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarNivelesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
