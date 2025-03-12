import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise28Component } from './exercise28.component';

describe('Exercise28Component', () => {
  let component: Exercise28Component;
  let fixture: ComponentFixture<Exercise28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise28Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
