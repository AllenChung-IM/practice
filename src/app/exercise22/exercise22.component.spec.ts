import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise22Component } from './exercise22.component';

describe('Exercise22Component', () => {
  let component: Exercise22Component;
  let fixture: ComponentFixture<Exercise22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
