import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise21Component } from './exercise21.component';

describe('Exercise21Component', () => {
  let component: Exercise21Component;
  let fixture: ComponentFixture<Exercise21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
