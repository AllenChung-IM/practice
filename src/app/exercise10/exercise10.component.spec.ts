import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise10Component } from './exercise10.component';

describe('Exercise10Component', () => {
  let component: Exercise10Component;
  let fixture: ComponentFixture<Exercise10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
