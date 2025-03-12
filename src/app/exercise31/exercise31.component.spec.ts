import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise31Component } from './exercise31.component';

describe('Exercise31Component', () => {
  let component: Exercise31Component;
  let fixture: ComponentFixture<Exercise31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise31Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
