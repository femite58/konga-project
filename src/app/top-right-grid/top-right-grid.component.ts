import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-top-right-grid',
  templateUrl: './top-right-grid.component.html',
  styleUrls: ['./top-right-grid.component.scss']
})
export class TopRightGridComponent implements OnInit {

  topRightImg = [
		'assets/images/toprightgridimg/1.jpg',
		'assets/images/toprightgridimg/2.jpg',
		'assets/images/toprightgridimg/3.jpg',
		'assets/images/toprightgridimg/4.jpg',
	];

  constructor(@Inject(WINDOW) private window: Window, ) { }

  @ViewChild('gridCont') gridCont: ElementRef;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  	// let gridCont = this.gridC.querySelector('.topBannerCont').querySelector('.gridCont');
  	let gridItems = this.gridCont.nativeElement.querySelectorAll('.flexItem');
  	
  	let me = this;
  	if (gridItems.length == 0) {
  		setTimeout(() => {
  			me.ngAfterViewInit();
  		}, 1000);
  	}

  	let winwidth = this.window.innerWidth;
		let parwidth = +this.gridCont.nativeElement.ownerDocument.defaultView.getComputedStyle(this.gridCont.nativeElement).width.replace("px","");
		if (winwidth <= 900) {
			me.gridResponsive(parwidth, gridItems, 1);
			return;
		}
		me.gridResponsive(parwidth, gridItems);

		this.gridCont.nativeElement.ownerDocument.defaultView.addEventListener('resize', () => {
  		let winWidth = this.window.innerWidth;
  		let parent = this.window.document.querySelector('.topBannerCont').querySelector('.gridCont');
  		let parentwidth = +this.gridCont.nativeElement.ownerDocument.defaultView.getComputedStyle(parent).width.replace("px","");
  		if (winWidth <= 900) {
  			me.gridResponsive(parentwidth, gridItems, 1);
  			return;
  		}
  		me.gridResponsive(parentwidth, gridItems);
  	});
  }

  gridResponsive(parentWidth, items, changeRes = 0): void {
  	if (changeRes == 0) {
	  	let newwidth = (parentWidth * 188.90) / 418.88;
	  	let newH = (parentWidth * 184) / 418.88;
	  	let marg = (parentWidth * 20) / 418.88;
	  	for (let i=0; i<items.length; i++) {
	  		items[i.toString()].style.width = newwidth + "px";
	  		items[i.toString()].style.height = newH + "px";
	  		items[i.toString()].style.margin = `0 0 ${marg}px 0`;
	  	}
	  	items["0"].parentNode.style.paddingLeft = marg + "px";
  	}

  	if (changeRes == 1) {
  		let newwidth = (parentWidth * 195) / 842;
	  	let newH = (parentWidth * 184) / 842;
	  	for (let i=0; i<items.length; i++) {
	  		items[i.toString()].style.width = newwidth + "px";
	  		items[i.toString()].style.height = newH + "px";
	  	}
	  	items["0"].parentNode.style.paddingLeft = "0px";	
  	}
  }

}
