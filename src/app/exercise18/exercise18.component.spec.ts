import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise18Component } from './exercise18.component';

describe('Exercise18Component', () => {
  let component: Exercise18Component;
  let fixture: ComponentFixture<Exercise18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
