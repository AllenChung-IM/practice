import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise11Component } from './exercise11.component';

describe('Exercise11Component', () => {
  let component: Exercise11Component;
  let fixture: ComponentFixture<Exercise11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
