import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-variation',
	templateUrl: './price-variation.component.html',
	styleUrls: ['./price-variation.component.scss']
})
export class PriceVariationComponent implements OnInit {

	priceVarList = [
		'Under N2000',
		'N2000 - N5000',
		'N5000 - N10000',
		'N10000 - N20000',
		'N20000 - N40000',
		'Above N40000'
	];

	priceContH;

	opened = true;

	constructor() { }

	ngOnInit(): void {
		this.initiateAccordion();
	}

	initiateAccordion(): void {
		let priceCont = document.querySelector('#priceItemContainer');
		let variationItems = priceCont.querySelectorAll('.variationItems');
		let me = this;
		if (variationItems.length == 0) {
			setTimeout(() => {
				me.initiateAccordion();
			}, 1000);
			return;
		}

		let totalH = 0;
		for (let i = 0; i < variationItems.length; i++) {
			let itemH = +getComputedStyle(variationItems[i.toString()]).height.replace('px', '');
			totalH += itemH;
		}

		let priceRH = +getComputedStyle(priceCont.querySelector('.priceRange')).height.replace('px', '');
		this.priceContH = totalH + priceRH;
	}

	preventAlph(e): void {
		e.preventDefault();
		if (e.key == "Backspace") {
			e.target.value = e.target.value.substr(0, e.target.value.length - 1);
			return;
		}
		if (!isNaN(e.key)) {
			e.target.value = e.target.value + e.key;
		}
	}

}
