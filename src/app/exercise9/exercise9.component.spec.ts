import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise9Component } from './exercise9.component';

describe('Exercise9Component', () => {
  let component: Exercise9Component;
  let fixture: ComponentFixture<Exercise9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
