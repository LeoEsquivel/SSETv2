import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsubsistemasComponent } from './subsubsistemas.component';

describe('SubsubsistemasComponent', () => {
  let component: SubsubsistemasComponent;
  let fixture: ComponentFixture<SubsubsistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsubsistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsubsistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
