import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise20Component } from './exercise20.component';

describe('Exercise20Component', () => {
  let component: Exercise20Component;
  let fixture: ComponentFixture<Exercise20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
