import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise26Component } from './exercise26.component';

describe('Exercise26Component', () => {
  let component: Exercise26Component;
  let fixture: ComponentFixture<Exercise26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise26Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
