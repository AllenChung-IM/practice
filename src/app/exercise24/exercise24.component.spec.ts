import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise24Component } from './exercise24.component';

describe('Exercise24Component', () => {
  let component: Exercise24Component;
  let fixture: ComponentFixture<Exercise24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exercise24Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exercise24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
