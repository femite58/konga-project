import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-cat',
  templateUrl: './popular-cat.component.html',
  styleUrls: ['./popular-cat.component.scss']
})
export class PopularCatComponent implements OnInit {

  popularProdList = [
  	{
  		title: 'Computers and Accessories',
  		bigImg: 'assets/images/popularcat/1.png',
  		smallImg: 'assets/images/popularcat/1t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Phones and Tablets',
  		bigImg: 'assets/images/popularcat/2.jpg',
  		smallImg: 'assets/images/popularcat/2t.png',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Electronics',
  		bigImg: 'assets/images/popularcat/3.jpg',
  		smallImg: 'assets/images/popularcat/3t.png',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Konga Fashion',
  		bigImg: 'assets/images/popularcat/4.png',
  		smallImg: 'assets/images/popularcat/4t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Home and Kitchen',
  		bigImg: 'assets/images/popularcat/5.jpg',
  		smallImg: 'assets/images/popularcat/5t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Baby, Kids and Toys',
  		bigImg: 'assets/images/popularcat/6.jpg',
  		smallImg: 'assets/images/popularcat/6t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Wines & Other Categories',
  		bigImg: 'assets/images/popularcat/7.jpg',
  		smallImg: 'assets/images/popularcat/7t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Beauty, Health & Personal Care',
  		bigImg: 'assets/images/popularcat/8.png',
  		smallImg: 'assets/images/popularcat/8t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Sports and Fitness',
  		bigImg: 'assets/images/popularcat/9.jpg',
  		smallImg: 'assets/images/popularcat/9t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	},
  	{
  		title: 'Automotive',
  		bigImg: 'assets/images/popularcat/10.jpg',
  		smallImg: 'assets/images/popularcat/10t.jpg',
  		links: [
  			'Laptops',
  			'Desktop and Monitors',
  			'Computing Accessories'
  		]
  	}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
