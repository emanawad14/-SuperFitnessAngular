import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass, CarouselModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  @Input() tabs: { id: string; name: string }[] = [];
  @Input() defaultActiveTab: string = ''; 
  @Output() tabClick = new EventEmitter<{ id: string; name: string }>();

  activeTab: string = ''; 

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
    { breakpoint: '768px', numVisible: 2, numScroll: 2 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];

  ngOnInit() {
    this.activeTab = this.defaultActiveTab || (this.tabs.length > 0 ? this.tabs[0].id : '');
    console.log(this.defaultActiveTab);
    console.log(this.tabs);
    
    
    if (this.activeTab && this.tabs.length > 0) {
      const initialTab = this.tabs.find(t => t.id === this.activeTab) || this.tabs[0];
      this.tabClick.emit(initialTab);
    }
  }

  setActiveTab(tab: { id: string; name: string }) {
    this.activeTab = tab.id; 
    this.tabClick.emit(tab);
  }
}
