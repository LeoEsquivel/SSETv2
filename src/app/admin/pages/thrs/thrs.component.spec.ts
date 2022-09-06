import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrsComponent } from './thrs.component';

describe('ThrsComponent', () => {
  let component: ThrsComponent;
  let fixture: ComponentFixture<ThrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
