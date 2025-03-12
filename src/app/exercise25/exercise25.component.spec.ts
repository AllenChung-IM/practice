import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise25Component } from './exercise25.component';

describe('Exercise25Component', () => {
  let component: Exercise25Component;
  let fixture: ComponentFixture<Exercise25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise25Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
