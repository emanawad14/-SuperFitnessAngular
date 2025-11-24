import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  @Input() tabs: { id: string; name: string }[] = [];
  @Input() activeTab: string = '';

  @Output() tabClick = new EventEmitter<{ id: string; name: string }>();

  setActiveTab(tab: { id: string; name: string }) {
    this.tabClick.emit(tab);
  }
}
