import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricStepComponent } from './metric-step.component';

describe('MetricStepComponent', () => {
  let component: MetricStepComponent;
  let fixture: ComponentFixture<MetricStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetricStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetricStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
