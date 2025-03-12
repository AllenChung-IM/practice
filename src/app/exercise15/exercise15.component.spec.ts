import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise15Component } from './exercise15.component';

describe('Exercise15Component', () => {
  let component: Exercise15Component;
  let fixture: ComponentFixture<Exercise15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
