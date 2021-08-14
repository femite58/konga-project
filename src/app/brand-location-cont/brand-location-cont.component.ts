import { Component, OnInit, AfterViewInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-brand-location-cont',
  templateUrl: './brand-location-cont.component.html',
  styleUrls: ['./brand-location-cont.component.scss']
})
export class BrandLocationContComponent implements OnInit, AfterViewInit {

	brandLogoList = [
		'assets/images/shiplocation/1.png',
		'assets/images/shiplocation/2.jpg',
		'assets/images/shiplocation/3.jpg',
		'assets/images/shiplocation/4.png',
		'assets/images/shiplocation/5.jpg',
		'assets/images/shiplocation/6.png',
	];

  constructor(@Inject(WINDOW) private window: Window, ) { }

  @ViewChild('brandLocationCont') brandCont: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  	let brandLogoCont = this.brandCont.nativeElement.querySelectorAll('.brandLogoCont');
  	
  	let me = this;
  	if (brandLogoCont.length == 0) {
  		setTimeout(() => {
  			me.ngAfterViewInit();
  		}, 1000);
  		return;
  	}

  	let itemw = +this.brandCont.nativeElement.ownerDocument.defaultView.getComputedStyle(brandLogoCont["0"]).width.replace("px","");
  	me.responsive(itemw, brandLogoCont);

  	this.brandCont.nativeElement.ownerDocument.defaultView.addEventListener('resize', () => {
  		let items = document.querySelector('.brandLocationCont').querySelectorAll('.brandLogoCont');
  		let itemW = +getComputedStyle(items["0"]).width.replace("px","");
  		me.responsive(itemW, brandLogoCont);
  	});
  }

  responsive(logoContWidth, items) {
  	let newH = (logoContWidth * 56) / 205.67;
  	let padX = (logoContWidth * 25)/205.67;
  	let padY = (logoContWidth * 13)/205.67;
  	let winwidth = this.window.innerWidth;
  	let margB = (logoContWidth * 15)/286.65;

  	for (let i=0; i<items.length; i++) {
  		items[i.toString()].style.cssText = `height: ${newH}px; padding: ${padY}px ${padX}px; ${winwidth <= 900 ? ('margin-bottom:'+margB+'px;') : ''}`;
  	}
  }

}
