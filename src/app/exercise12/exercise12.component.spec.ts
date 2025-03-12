import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise12Component } from './exercise12.component';

describe('Exercise12Component', () => {
  let component: Exercise12Component;
  let fixture: ComponentFixture<Exercise12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
