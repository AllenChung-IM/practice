import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise27Component } from './exercise27.component';

describe('Exercise27Component', () => {
  let component: Exercise27Component;
  let fixture: ComponentFixture<Exercise27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise27Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
