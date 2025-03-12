import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise14Component } from './exercise14.component';

describe('Exercise14Component', () => {
  let component: Exercise14Component;
  let fixture: ComponentFixture<Exercise14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
