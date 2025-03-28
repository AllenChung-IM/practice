import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthComponent } from './eighth.component';

describe('EighthComponent', () => {
  let component: EighthComponent;
  let fixture: ComponentFixture<EighthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EighthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
