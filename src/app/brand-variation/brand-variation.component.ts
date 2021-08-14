import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-variation',
  templateUrl: './brand-variation.component.html',
  styleUrls: ['./brand-variation.component.scss']
})
export class BrandVariationComponent implements OnInit {

  brandVarList = [
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  	{brand: 'HP', count: 18000},
  	{brand: 'SanDisk', count: 11000},
  	{brand: 'Dell', count: 1090},
  	{brand: 'Longitech', count: 2000},
  	{brand: 'Microsoft', count: 16000},
  ];
  brandlist;
  searchText = '';

  brandContH = 380;
  opened = true;

  constructor() { }

  ngOnInit(): void {
  	this.brandlist = this.brandVarList;
  }

  filterSearch(): void {
  	let brandlist = [];
  	for (let i=0; i<this.brandlist.length; i++) {
  		if (this.brandlist[i].brand.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
  			brandlist.push(this.brandlist[i]);
  		}
  	}
  	if (brandlist.length != 0) {
  		this.brandVarList = brandlist;
  	} else {
  		this.brandVarList = this.brandlist;
  	}

  }

}
