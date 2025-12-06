import { Component, computed, EventEmitter, input, Input, model, Output, output, signal } from '@angular/core';
 import {  InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
 @Component({
  selector: 'app-metric-step',
  imports: [InputNumberModule, FormsModule],
  templateUrl: './metric-step.component.html',
  styleUrl: './metric-step.component.scss',
})
export class MetricStepComponent {
 
//   @Input() min: number = 1;
//   @Input() max: number = 100;
//   @Input() unit: string = '';
//   @Input() value: number = 0;
// @Output() valueChange = new EventEmitter<number>();
//    onValueChange(val: number) {
//    this.value = val;
//   this.valueChange.emit(val);
//     }

// ------------------------------------------------------------

//  weight = signal(90);
//   // minWeight = input(60);
//   min = input(60);

//   // maxWeight = input(300);
//     max = input(300);

//   unit = input.required<string>();
  
//   weightChange = output<number>();

//   isDragging = signal(false);
//   startX = signal(0);
//   startWeight = signal(0);

//   // Get 8 numbers centered around current weight
//   visibleWeights = computed(() => {
//     const current = this.weight();
//     const weights: number[] = [];
    
//     // Show 4 numbers before and 3 after (total 8 including current)
//     for (let i = current - 3; i <= current + 3; i++) {
//       if (i >= this.min() && i <= this.max()) {
//         weights.push(i);
//       }
//     }
    
//     return weights;
//   });

//   // Calculate opacity based on distance from center
//   getOpacity(w: number): number {
//     const current = this.weight();
//     const distance = Math.abs(w - current);
    
//     if (distance === 0) return 1; // Active number
//     if (distance <= 2) return 1; // 2 numbers on each side are white
//     return 0.3; // Others are faded (shadow effect)
//   }

//   // Helper method to update weight and emit change
//   private updateWeight(newWeight: number): void {
//     if (newWeight >= this.min() && newWeight <= this.max()) {
//       this.weight.set(newWeight);
//       this.weightChange.emit(newWeight);
//     }
//   }

//   onWheel(event: WheelEvent): void {
//     event.preventDefault();
//     const delta = event.deltaY > 0 ? -1 : 1;
//     const newWeight = this.weight() + delta;
//     this.updateWeight(newWeight);
//   }

//   onMouseDown(event: MouseEvent): void {
//     this.isDragging.set(true);
//     this.startX.set(event.clientX);
//     this.startWeight.set(this.weight());
//     event.preventDefault();
//   }

//   onMouseMove(event: MouseEvent): void {
//     if (!this.isDragging()) return;
    
//     const diff = this.startX() - event.clientX;
//     const steps = Math.round(diff / 20); 
//     const newWeight = this.startWeight() + steps;
//     this.updateWeight(newWeight);
//   }

//   onMouseUp(): void {
//     this.isDragging.set(false);
//   }

//   onTouchStart(event: TouchEvent): void {
//     this.isDragging.set(true);
//     this.startX.set(event.touches[0].clientX);
//     this.startWeight.set(this.weight());
//   }

//   onTouchMove(event: TouchEvent): void {
//     if (!this.isDragging()) return;
    
//     const diff = this.startX() - event.touches[0].clientX;
//     const steps = Math.round(diff / 20);
//     const newWeight = this.startWeight() + steps;
//     this.updateWeight(newWeight);
//   }

//   onTouchEnd(): void {
//     this.isDragging.set(false);
//   }

  // --------------------------------------------------------------

  
 
  // ✅ القيمة الجاية من الأب
  value = input(0);
  valueChange = output<number>();

   min = input(0);
  max = input(100);
  unit = input.required<string>();

  isDragging = signal(false);
  startX = signal(0);
  startValue = signal(0);

  visibleValues = computed(() => {
  const current = this.value();
  const values: number[] = [];

    for (let i = current - 3; i <= current + 3; i++) {
      if (i >= this.min() && i <= this.max()) {
        values.push(i);
      }
    }
    return values;
  });

   getOpacity(v: number): number {
    const distance = Math.abs(v - this.value());
    return distance === 0 || distance <= 2 ? 1 : 0.3;
  }

   private updateValue(newValue: number): void {
    if (newValue >= this.min() && newValue <= this.max()) {
      this.valueChange.emit(newValue);  
    }
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -1 : 1;
    this.updateValue(this.value() + delta);
  }

  onMouseDown(event: MouseEvent): void {
    this.isDragging.set(true);
    this.startX.set(event.clientX);
    this.startValue.set(this.value());
    event.preventDefault();
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging()) return;

    const diff = this.startX() - event.clientX;
    const steps = Math.round(diff / 20);
    this.updateValue(this.startValue() + steps);
  }

  onMouseUp(): void {
    this.isDragging.set(false);
  }

  onTouchStart(event: TouchEvent): void {
    this.isDragging.set(true);
    this.startX.set(event.touches[0].clientX);
    this.startValue.set(this.value());
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isDragging()) return;

    const diff = this.startX() - event.touches[0].clientX;
    const steps = Math.round(diff / 20);
    this.updateValue(this.startValue() + steps);
  }

  onTouchEnd(): void {
    this.isDragging.set(false);
  }
}
