import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise13Component } from './exercise13.component';

describe('Exercise13Component', () => {
  let component: Exercise13Component;
  let fixture: ComponentFixture<Exercise13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
