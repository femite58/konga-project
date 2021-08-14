import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

	topProdList = [
		'assets/images/topproductcat/1.jpg',
		'assets/images/topproductcat/2.jpg',
		'assets/images/topproductcat/3.jpg',
		'assets/images/topproductcat/4.jpg',
		'assets/images/topproductcat/5.jpg',
		'assets/images/topproductcat/6.jpg',
	];
	
  constructor(
    private meta: Meta,
    private title: Title,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('this is home');
  }

  ngAfterViewInit(): void {
  }
}
