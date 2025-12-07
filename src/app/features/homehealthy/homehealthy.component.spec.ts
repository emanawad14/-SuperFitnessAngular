import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomehealthyComponent } from './homehealthy.component';

describe('HomehealthyComponent', () => {
  let component: HomehealthyComponent;
  let fixture: ComponentFixture<HomehealthyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomehealthyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomehealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
