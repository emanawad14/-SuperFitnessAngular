import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMetricComponent } from './settings-metric.component';

describe('SettingsMetricComponent', () => {
  let component: SettingsMetricComponent;
  let fixture: ComponentFixture<SettingsMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsMetricComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
