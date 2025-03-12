import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise16Component } from './exercise16.component';

describe('Exercise16Component', () => {
  let component: Exercise16Component;
  let fixture: ComponentFixture<Exercise16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
