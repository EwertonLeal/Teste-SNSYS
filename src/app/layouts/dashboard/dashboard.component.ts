import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/**
 * Utility starter component
 */
export class DashboardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
collectionSize: any;
page: any;
pageSize: any;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Utility' }, { label: 'Starter Page', active: true }];
  }
}
