import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise23Component } from './exercise23.component';

describe('Exercise23Component', () => {
  let component: Exercise23Component;
  let fixture: ComponentFixture<Exercise23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise23Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
