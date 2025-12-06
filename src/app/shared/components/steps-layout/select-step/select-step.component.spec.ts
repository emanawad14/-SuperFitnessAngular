import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectStepComponent } from './select-step.component';

describe('SelectStepComponent', () => {
  let component: SelectStepComponent;
  let fixture: ComponentFixture<SelectStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
