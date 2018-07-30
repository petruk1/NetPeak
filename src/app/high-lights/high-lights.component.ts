import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-high-lights',
  templateUrl: './high-lights.component.html',
  styleUrls: ['./high-lights.component.css']
})
export class HighLightsComponent implements OnInit {

  tabs: any[];
  selectedTab: object;
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.tabs = this.dataService.getMockTabsData();
    this.selectedTab = this.tabs[0];
  }
}
