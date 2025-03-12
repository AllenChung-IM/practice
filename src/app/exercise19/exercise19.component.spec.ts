import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise19Component } from './exercise19.component';

describe('Exercise19Component', () => {
  let component: Exercise19Component;
  let fixture: ComponentFixture<Exercise19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
