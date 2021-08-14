import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-deals',
  templateUrl: './latest-deals.component.html',
  styleUrls: ['./latest-deals.component.scss']
})
export class LatestDealsComponent implements OnInit {

  ldealProdList = [
  	{
  		name: 'H & M Women Denim Jeggings Low and so on',
  		img: 'assets/images/latestdeals/1.jpg',
  		genPrice: 7400,
  		sellPrice: 6500,
  	},
  	{
  		name: 'H & M Women Denim Jeggings Low and so on',
  		img: 'assets/images/latestdeals/2.png',
  		genPrice: 9400,
  		sellPrice: 7500,
  	},
  	{
  		name: 'H & M Women Denim Jeggings Low and so on',
  		img: 'assets/images/latestdeals/3.jpg',
  		genPrice: 0,
  		sellPrice: 6500,
  	},
  	{
  		name: 'H & M Women Denim Jeggings Low and so on',
  		img: 'assets/images/latestdeals/4.jpg',
  		genPrice: 10200,
  		sellPrice: 5500,
  	},
  	{
  		name: 'H & M Women Denim Jeggings Low and so on',
  		img: 'assets/images/latestdeals/5.jpg',
  		genPrice: 2400,
  		sellPrice: 1500,
  	},
  	{
  		name: 'H & M Women Denim Jeggings Low and so on',
  		img: 'assets/images/latestdeals/6.jpg',
  		genPrice: 0,
  		sellPrice: 6900,
  	},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
