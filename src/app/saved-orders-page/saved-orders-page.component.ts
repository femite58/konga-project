import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-orders-page',
  templateUrl: './saved-orders-page.component.html',
  styleUrls: ['./saved-orders-page.component.scss']
})
export class SavedOrdersPageComponent implements OnInit {
  savedItems = [1];
	sponsProdList = [
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Konga Warehouse',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 4,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 3,
			reviews: 1,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 0,
			reviews: 0,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 4,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 3,
			reviews: 1,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 0,
			reviews: 0,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Konga Warehouse',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Konga Warehouse',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 4,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 3,
			reviews: 1,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 0,
			reviews: 0,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 4,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 0,
			reviews: 0,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 4,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 3,
			reviews: 1,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 0,
			reviews: 0,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 1,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 4,
			reviews: 2,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 0,
			reviews: 0,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: []
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/4.jpg',
			sellPrice: 175000,
			genPrice: 210000,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 5,
			reviews: 6,
			deliveryInfo: ['Lagos', 'Abuja']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
			seller: 'Synergy2020',
			shippingInfo: 'Free Shipping',
			stars: 5,
			reviews: 2,
			deliveryInfo: ['Lagos']
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/catlistbottom/3.jpg',
			sellPrice: 175000,
			genPrice: 0,
			seller: 'Synergy2020',
			shippingInfo: '',
			stars: 0,
			reviews: 0,
			deliveryInfo: []
		}
  ];
  maxNumProd = 8;

	currentPage = 1;
  constructor() { }

  ngOnInit(): void {
  }
  get prodDisplayList() {
		let startInd = (this.maxNumProd * this.currentPage) - this.currentPage;
		let endInd = startInd + this.maxNumProd;
		return this.sponsProdList.slice(startInd, endInd);
	}

	get navPageList() {
		let pageArray = Array(Math.ceil(this.sponsProdList.length / this.maxNumProd)).fill(0).map((c, i) => { return i + 1 });
		return pageArray;
	}

	scrollTop(i, control = 0) {
		if (control == 0) {
			this.currentPage = i + 1;
		} else if (control == 1) {
			this.currentPage++;
		} else {
			this.currentPage--;
		}
		let body = document.querySelector('html');
		let scrollpos = document.getElementsByClassName('addToCartProdCont')['0'].offsetTop;
		body.scrollTop = scrollpos;
	}

	contentCheck(i): boolean {
		if ((this.currentPage - (i + 1)) == 1
			|| ((i + 1) - this.currentPage) == 1
			|| ((i + 1) == this.currentPage)
			|| ((i + 1) == this.navPageList[this.navPageList.length - 1])
			|| i == 0) {
			return true;
		}
		return false;
	}

	displayCheck(i): boolean {
		if (((this.currentPage - (i + 1)) <= 2 && (this.currentPage - (i + 1)) > 0)
			|| (((i + 1) - this.currentPage) <= 2 && ((i + 1) - this.currentPage) > 0)
			|| ((i + 1) == this.currentPage)
			|| ((i + 1) == this.navPageList[this.navPageList.length - 1])
			|| i == 0) {
			return true;
		}
		return false;
	}

}
