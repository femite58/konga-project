import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomm-products',
  templateUrl: './recomm-products.component.html',
  styleUrls: ['./recomm-products.component.scss']
})
export class RecommProductsComponent implements OnInit {

  prodList = [
  	{
  		name: 'HP Notebook 15-RB006NIA AMD A4D and so on',
  		img: 'assets/images/recomprod/1.jpg',
  		genPrice: 107400,
  		sellPrice: 88500,
  		reviews: 4,
  	},
  	{
  		name: 'HP Notebook 15-RB006NIA AMD A4D and so on',
  		img: 'assets/images/recomprod/2.jpg',
  		genPrice: 100500,
  		sellPrice: 80500,
  		reviews: 2,
  	},
  	{
  		name: 'HP Notebook 15-RB006NIA AMD A4D and so on',
  		img: 'assets/images/recomprod/3.jpg',
  		genPrice: 0,
  		sellPrice: 98500,
  		reviews: 0,
  	},
  	{
  		name: 'HP Notebook 15-RB006NIA AMD A4D and so on',
  		img: 'assets/images/recomprod/4.jpg',
  		genPrice: 124400,
  		sellPrice: 82500,
  		reviews: 0,
  	},
  	{
  		name: 'HP Notebook 15-RB006NIA AMD A4D and so on',
  		img: 'assets/images/recomprod/5.jpg',
  		genPrice: 0,
  		sellPrice: 88500,
  		reviews: 5,
  	},
  	{
  		name: 'HP Notebook 15-RB006NIA AMD A4D and so on',
  		img: 'assets/images/recomprod/6.jpg',
  		genPrice: 157400,
  		sellPrice: 100500,
  		reviews: 2,
  	},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
