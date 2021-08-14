import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  datedOrders = [
    {
      orderItems: [
        { status: 'shipped' },
        { status: 'processing' },
      ]
    },
    {
      orderItems: [
        { status: 'processing' },
        { status: 'processing' },
        { status: 'shipped' },
      ]
    },
  ];
  activeOrder = -1;
  selectedMenu = 'all';
  mobilePage = 1;
  filterPage = false;
  orderSummary = null;
  
  constructor() { }

  ngOnInit(): void {
  }

  get filterStatus() {
    if (this.selectedMenu === 'all') {
      return this.datedOrders[this.activeOrder].orderItems;
    }
    let newArr = this.datedOrders[this.activeOrder].orderItems.filter((x) => { 
      return x.status === this.selectedMenu; 
    });
    return newArr;
  }

  itemIndices = [];

  get mobileFilter() {
    if (this.selectedMenu === 'all') {
      this.itemIndices = [];
      for (let i=0; i<this.datedOrders[this.activeOrder].orderItems.length; i++) {
        this.itemIndices.push(i);
      }
      return this.datedOrders[this.activeOrder].orderItems;
    }
    this.itemIndices = [];
    let newArr = this.datedOrders[this.activeOrder].orderItems.filter((x, i) => {
      if (x.status === this.selectedMenu) {
        this.itemIndices.push(i);
      }
      return x.status === this.selectedMenu; 
    });
    return newArr;
  }

  showDetails(ind) {
    this.activeOrder = ind; 
    this.mobilePage = 2;
  }

  showSummaryPage(ind) {
    this.mobilePage = 3;
    this.orderSummary = this.datedOrders[this.activeOrder].orderItems[ind];
  }

  backAction() {
    if (this.filterPage) {
      this.filterPage = false;
      return;
    }
    this.mobilePage--;
  }

}
