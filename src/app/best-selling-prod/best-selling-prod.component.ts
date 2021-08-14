import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
	selector: 'app-best-selling-prod',
	templateUrl: './best-selling-prod.component.html',
	styleUrls: ['./best-selling-prod.component.scss']
})
export class BestSellingProdComponent implements OnInit, AfterViewInit{

	sponsProdList = [
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/2.jpg',
			sellPrice: 75000,
			genPrice: 100000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/1.jpg',
			sellPrice: 175000,
			genPrice: 200000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/2.jpg',
			sellPrice: 175000,
			genPrice: 210000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/1.jpg',
			sellPrice: 17000,
			genPrice: 50000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/2.jpg',
			sellPrice: 175000,
			genPrice: 210000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/2.jpg',
			sellPrice: 175000,
			genPrice: 210000,
		},
		{
			name: 'Nebula apollo wi-fi mini portable pro and so on',
			img: 'assets/images/sponsoredprod/1.jpg',
			sellPrice: 175000,
			genPrice: 210000,
		},
	];

	inc;
	padding;
	slidewidth;

	slides;
	slideslen;
	@ViewChild('bestCont') slidecontainer: ElementRef;
	imageContainer;
	h3;
	sellPrice;
	genPrice;
	savings;
	percOff;
	slideprev;
	slidenext;

	resEvent;

	constructor(@Inject(WINDOW) private window: Window, ) { }

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.initiateSlide();
	}

	ngOnDestroy() {
		const me = this;
		this.slidecontainer.nativeElement.ownerDocument.defaultView.removeEventListener('resize', me.resEvent);
	}

	initiateSlide(): void {
		this.inc = 19.7;

		// this.slidecontainer = document.getElementsByClassName("bestSellingProdItemCont")['0'];
		this.slides = this.slidecontainer.nativeElement.getElementsByClassName("prodItem");
		this.slideslen = this.slides.length;

		let me = this;
		if (this.slideslen == 0) {
			setTimeout(() => {
				me.initiateSlide();
			}, 1000);
			return;
		}

		this.imageContainer = this.slidecontainer.nativeElement.getElementsByClassName("imageContainer");
		this.h3 = this.slidecontainer.nativeElement.getElementsByTagName("h3");
		this.sellPrice = this.slidecontainer.nativeElement.getElementsByClassName("sellPrice");
		this.genPrice = this.slidecontainer.nativeElement.getElementsByClassName("genPrice");
		this.savings = this.slidecontainer.nativeElement.getElementsByClassName("savings");
		this.percOff = this.slidecontainer.nativeElement.getElementsByClassName("percOff");
		this.slideprev = this.slidecontainer.nativeElement.querySelector(".prevCont").querySelector('a');
		this.slidenext = this.slidecontainer.nativeElement.querySelector(".nextCont").querySelector('a');

		var conditionedDisplay = this.slidecontainer.nativeElement.querySelector('.conditionedDisplay');
		if (conditionedDisplay != undefined) {
			conditionedDisplay.style.display = this.sponsProdList == undefined ? "block" : "none";
		}

		let parentWidth = +this.slidecontainer.nativeElement.ownerDocument.defaultView.getComputedStyle(this.slidecontainer.nativeElement).width.replace("px", "");
		this.responsive(parentWidth);

		this.resEvent = resize;

		this.slidecontainer.nativeElement.ownerDocument.defaultView.addEventListener("resize", resize);
		function resize() {
			let slidecontainer = me.window.document.getElementsByClassName('bestSellingProdItemCont')["0"];
			let parentWidthRes = +getComputedStyle(slidecontainer).width.replace("px", "");
			me.responsive(parentWidthRes);
		}
	}

	responsive(parentwidth): void {
		let me = this;
		let i;

		// in case the DOM is not yet available, this restarts initiateSlide() every 1s
		if (me.slideslen == 0) {
			setTimeout(() => {
				me.initiateSlide();
			}, 1000);
			return;
		}


		if (parentwidth >= 1309) { onscreenSize1349(); }
		if (parentwidth < 419) { onscreenSize300(); }
		if (parentwidth < 550 && parentwidth > 420) { onscreenSize475(); }
		if (parentwidth < 851 && parentwidth > 549) { onscreenSize700(); }
		if (parentwidth < 1309 && parentwidth > 850) { onscreenSize1200(); }

		function onscreenSize300() {
			var slidepos = 5;
			for (i = 0; i < me.slideslen; i++) { me.slides['' + i + ''].style.transition = "0s"; }
			for (i = 0; i < me.slideslen; i++) {
				me.slides['' + i + ''].style.width = "90%";
				me.slides['' + i + ''].style.left = slidepos + "%";
				slidepos += 95;
			};

			calcSlideHeight(90);

			me.matchfonts(parentwidth, 90);
			me.inc = 95;
			me.padding = 5;
			me.slidewidth = 90;
		}

		function calcSlideHeight(slidewidth) {
			// this converts the slidewidth from % to "px";
			var calwidth = (slidewidth / 100) * (parentwidth);
			var newheight = (350 * calwidth) / 238.238;
			me.slidecontainer.nativeElement.style.height = (newheight + 25) + "px";
			for (i = 0; i < me.slideslen; i++) {
				me.slides['' + i + ''].style.height = newheight + "px";
			};
		}

		function onscreenSize475() {
			for (i = 0; i < me.slideslen; i++) { me.slides['' + i + ''].style.transition = "0s"; }
			var slidepos = 4;
			for (i = 0; i < me.slideslen; i++) {
				me.slides['' + i + ''].style.width = "44%";
				me.slides['' + i + ''].style.left = slidepos + "%";
				slidepos += 48;
			}

			calcSlideHeight(44);

			me.matchfonts(parentwidth, 44);
			me.inc = 48;
			me.padding = 4;
			me.slidewidth = 44;
		}

		function onscreenSize700() {
			var slidepos = 2.5;
			for (i = 0; i < me.slideslen; i++) { me.slides['' + i + ''].style.transition = "0s"; }
			for (i = 0; i < me.slideslen; i++) {
				me.slides['' + i + ''].style.width = "30%";
				me.slides['' + i + ''].style.left = slidepos + "%";
				slidepos += 32.5;
			};

			calcSlideHeight(30);

			me.matchfonts(parentwidth, 30);

			me.inc = 32.5;
			me.padding = 2.5;
			me.slidewidth = 30;
		}

		function onscreenSize1200() {
			var slidepos = 2.4;
			for (i = 0; i < me.slideslen; i++) { me.slides['' + i + ''].style.transition = "0s"; };
			for (i = 0; i < me.slideslen; i++) {
				me.slides['' + i + ''].style.width = "22%";
				me.slides['' + i + ''].style.left = slidepos + "%";
				slidepos += 24.4;
			};

			calcSlideHeight(22);

			me.matchfonts(parentwidth, 22);

			me.inc = 24.4;
			me.padding = 2.4;
			me.slidewidth = 22;
		}

		function onscreenSize1349() {
			var slidepos = 1.5;
			for (i = 0; i < me.slideslen; i++) { me.slides['' + i + ''].style.transition = "0s"; };
			for (i = 0; i < me.slideslen; i++) {
				me.slides['' + i + ''].style.width = "18.2%";
				me.slides['' + i + ''].style.left = slidepos + "%";
				slidepos += 19.7;
			};

			calcSlideHeight(18.2);

			me.matchfonts(parentwidth, 18.2);

			me.inc = 19.7;
			me.padding = 1.5;
			me.slidewidth = 18.2;
		}
	}

	matchfonts(parentwidthf, percSlideWidth): void {
		let slidewidth = (percSlideWidth / 100) * parentwidthf;
		let padwidth;
		percSlideWidth == 90 ?
			padwidth = (5 / 100) * parentwidthf : (percSlideWidth == 44) ?
				padwidth = (4 / 100) * parentwidthf : (percSlideWidth == 30) ?
					padwidth = (2.5 / 100) * parentwidthf :
					padwidth = (1.5 / 100) * parentwidthf;

		let i;

		// 238.238 is the initial CSS width in "px" of each slide 
		// 14, 200, 10 etc. are all the initial CSS values for the slide contents

		let h3Font = (15 * slidewidth) / 238.238;
		let sellPriceFont = (20 * slidewidth) / 238.238;
		let genPriceFont = (14 * slidewidth) / 238.238;
		let savingsFont = (12 * slidewidth) / 238.238;
		let percOffFont = (13 * slidewidth) / 238.238;
		let imageContH = (217 * slidewidth) / 238.238;
		let prodItemPad = (15 * slidewidth) / 238.238;
		let controllerFont = (25 * slidewidth) / 238.238;
		let controllerSize = (50 * padwidth) / 19.635;

		for (i = 0; i < this.slideslen; i++) {
			this.h3['' + i + ''].style.fontSize = (h3Font < 12 ? 12 : h3Font) + "px";
			this.sellPrice['' + i + ''].style.fontSize = sellPriceFont + "px";
			if (this.genPrice[i.toString()] != undefined) {
				this.genPrice['' + i + ''].style.fontSize = (genPriceFont < 10 ? 10 : genPriceFont) + "px";
				this.savings['' + i + ''].style.fontSize = savingsFont + "px";
				this.percOff['' + i + ''].style.fontSize = (percOffFont < 11 ? 11 : percOffFont) + "px";
			}
			this.imageContainer['' + i + ''].style.height = imageContH + "px";
			this.slides[i.toString()].style.padding = prodItemPad + "px";
		}

		this.slideprev.style.cssText = `line-height: ${controllerSize}px; font-size: ${controllerFont}px; width: ${controllerSize}px;`;
		this.slidenext.style.cssText = `line-height: ${controllerSize}px; font-size: ${controllerFont}px; width: ${controllerSize}px;`;
	}

	dragStart(e): void {
		if (e.target.className == "slideprev"
			|| e.target.className == "slidenext"
			|| e.target.tagName == "A") {
			return;
		}

		e.preventDefault();

		BestSellingProdComponent.initialPos = e.type == "touchstart" ? e.touches[0].clientX : e.x;
		this.slidecontainer.nativeElement.style.cursor = "grab";
		let me = this;

		e.type == "touchstart" ?
			this.slidecontainer.nativeElement.addEventListener("touchmove", me.initiateDrag) :
			this.slidecontainer.nativeElement.addEventListener("mousemove", me.initiateDrag);
	}

	initiateDrag(me = this): void {
		// me.slidecontainer = this.windowdocument.getElementsByClassName('bestSellingProdItemCont')['0'];
		me.slides = me.slidecontainer.nativeElement.getElementsByClassName('prodItem');
		let self = BestSellingProdComponent;
		self.drag(event);
	}

	static initialPos;
	static slideDiff = 0;
	static slidePos;

	static drag(e): void {
		let xpos = e.type == "touchmove" ? e.touches[0].clientX : e.x;
		let diff = this.initialPos - xpos;
		this.initialPos = xpos;
		this.slideDiff = diff;

		let parentwidth = +getComputedStyle(e.slidecontainer).width.replace("px", "");

		let padding;
		let slidewidth;

		if (parentwidth < 419) {
			padding = 5;
			slidewidth = 90;
		}
		if (parentwidth < 550 && parentwidth > 420) {
			padding = 4;
			slidewidth = 44;
		}
		if (parentwidth < 851 && parentwidth > 549) {
			padding = 2.5;
			slidewidth = 30;
		}
		if (parentwidth > 850 && parentwidth < 1309) {
			padding = 2.4;
			slidewidth = 22;
		}
		if (parentwidth >= 1309) {
			padding = 1.5;
			slidewidth = 18.2;
		}

		if (e.slides[(e.slides.length - 1).toString()].style.left == ((100 - (slidewidth + padding)) + "%") && diff > 0
			|| e.slides["0"].style.left == (padding + "%") && diff < 0) { return; }
		let inc;
		padding == 5 ?
			inc = 1 : (padding == 4) ?
				inc = 1 : (padding == 2.5) ?
					inc = 0.5 : (padding == 2.4) ?
						inc = 0.4 :
						inc = 0.7;

		for (let i = 0; i < e.slides.length; i++) {
			e.slides[i.toString()].style.transition = "0s";
			let newPos = e.slides[i.toString()].style.left.replace("%", "") - (diff > 0 ? inc : -inc);
			e.slides[i.toString()].style.left = newPos + "%";
		}

		for (let i = 0; i < e.slides.length; i++) {
			if (+e.slides[i.toString()].style.left.replace("%", "") > -slidewidth &&
				+e.slides[i.toString()].style.left.replace("%", "") < padding) {
				this.slidePos = +e.slides[i.toString()].style.left.replace("%", "");
				break;
			}
		}
	}

	dragStop(e): void {
		let self = BestSellingProdComponent;
		this.slidecontainer.nativeElement.style.cursor = "default";
		let me = this;
		e.type == "touchend" ?
			this.slidecontainer.nativeElement.removeEventListener("touchmove", me.initiateDrag) :
			this.slidecontainer.nativeElement.removeEventListener("mousemove", me.initiateDrag);

		let slideExt = (self.slidePos - this.padding) * -1;

		if (self.slideDiff > 0) {
			if (slideExt > ((this.padding == 1.5 || this.padding == 2.5) ? 5 : (this.padding == 4) ? 10 : 15)) {
				this.finalSlide(1, (this.inc - slideExt));
			} else {
				this.finalSlide(-1, slideExt);
			}
			self.slideDiff = 0;
		} else if (self.slideDiff < 0) {
			slideExt = this.inc - (slideExt);
			if (slideExt > ((this.padding == 1.5 || this.padding == 2.5) ? 5 : (this.padding == 4) ? 10 : 15)) {
				this.finalSlide(-1, (this.inc - slideExt));
			} else {
				this.finalSlide(1, slideExt);
			}
			self.slideDiff = 0;
		}
	}

	finalSlide(n, ext) {
		this.slides = this.slidecontainer.nativeElement.querySelectorAll('.prodItem');
		let i;

		if (this.slides[(this.slideslen - 1).toString()].style.left == ((100 - (this.slidewidth + this.padding)) + "%") && n == 1
			|| this.slides["0"].style.left == (this.padding + "%") && n == -1) { return; }

		for (i = 0; i < this.slideslen; i++) {
			this.slides['' + i + ''].style.transition = "0.5s";
			let slidepos = +((this.slides['' + i + ''].style.left).replace("%", "")) - (n * ext);
			this.slides['' + i + ''].style.left = slidepos + "%";
		}
	}

	productSlider(n) {
		this.slides = this.slidecontainer.nativeElement.querySelectorAll('.prodItem');
		let i;

		if (this.slides[(this.slideslen - 1).toString()].style.left == ((100 - (this.slidewidth + this.padding)) + "%") && n == 1
			|| this.slides["0"].style.left == (this.padding + "%") && n == -1) { return; }

		for (i = 0; i < this.slideslen; i++) {
			this.slides['' + i + ''].style.transition = "0.6s";
			let slidepos = +((this.slides['' + i + ''].style.left).replace("%", "")) - (n * this.inc);
			this.slides['' + i + ''].style.left = slidepos + "%";
		}
	}

}


