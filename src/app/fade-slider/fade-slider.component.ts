import { Component, OnInit, OnDestroy, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
	selector: 'app-fade-slider',
	templateUrl: './fade-slider.component.html',
	styleUrls: ['./fade-slider.component.scss']
})
export class FadeSliderComponent implements OnInit, OnDestroy, AfterViewInit {

	slideImgList = [
		'assets/images/slidebanners/1.jpg',
		'assets/images/slidebanners/2.jpg',
		'assets/images/slidebanners/3.jpg',
		'assets/images/slidebanners/4.jpg',
		'assets/images/slidebanners/5.jpg',
		'assets/images/slidebanners/6.jpg',
		'assets/images/slidebanners/7.jpg',
		'assets/images/slidebanners/8.jpg',
		'assets/images/slidebanners/9.jpg',
	];

	@ViewChild('sC') slideContainer: ElementRef;
	slides;
	indicators;
	current = 0;
	autoSlideVar;
	prevControl;
	nextControl;

	resEvent;

	constructor(@Inject(WINDOW) private window: Window, ) { }

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		this.initiateSlide();
	}

	ngOnDestroy() {
		const me = this;
		this.slideContainer.nativeElement.ownerDocument.defaultView.removeEventListener('resize', me.resEvent);
	}

	initiateSlide(): void {
		// console.log('after');
		// .nativeElement = document.getElementsByClassName('slideContainer')["0"];
		this.slides = this.slideContainer.nativeElement.querySelectorAll('.slide');
		this.indicators = this.slideContainer.nativeElement.querySelectorAll('.indicator');
		this.prevControl = this.slideContainer.nativeElement.querySelector('.prevCont').querySelector('.prevControl');
		this.nextControl = this.slideContainer.nativeElement.querySelector('.nextCont').querySelector('.nextControl');

		let me = this;
		if (this.slides.length == 0) {
			setTimeout(() => {
				me.initiateSlide();
			}, 1000);
			return;
		}

		let parentWidth = +this.slideContainer.nativeElement.ownerDocument.defaultView.getComputedStyle(this.slideContainer.nativeElement).width.replace("px", "");
		this.responsive(parentWidth);
		this.resEvent = resize;
		this.slideContainer.nativeElement.ownerDocument.defaultView.addEventListener('resize', resize);
		function resize() {
			let slidecont = me.window.document.getElementsByClassName('slideContainer')["0"];
			let parentwidth = +getComputedStyle(slidecont).width.replace("px", "");
			me.responsive(parentwidth);
		}

		this.slides["0"].style.display = "block";
		this.autoSlide();
	}

	responsive(parentWidth, initWidth = 890.11): void {
		let newH = (parentWidth * 388) / initWidth;
		this.slideContainer.nativeElement.style.height = newH + "px";
		let controlH = (parentWidth * 50) / initWidth;
		let lineContH = (parentWidth * 48) / initWidth;
		let contFont = (parentWidth * 35) / initWidth;

		this.prevControl.style.cssText = `font-size: ${contFont}px; height: ${controlH}px; width: ${controlH}px; line-height: ${lineContH}px;`;
		this.nextControl.style.cssText = `font-size: ${contFont}px; height: ${controlH}px; width: ${controlH}px; line-height: ${lineContH}px;`;

	}

	autoSlide(): void {
		let me = this;
		this.autoSlideVar = setInterval(slide, 5000);
		function slide() {
			me.fadeSlide(1);
		}
	}

	cancelAutoSlide(): void {
		let me = this;
		clearInterval(me.autoSlideVar);
	}

	fadeSlide(n): void {
		this.current += n;

		if (this.current >= this.slides.length) { this.current = 0 }
		if (this.current < 0) { this.current = (this.slides.length - 1) }

		this.slides[this.current.toString()].style.display = "block";
		let me = this;
		setTimeout(() => {
			for (let i = 0; i < me.slides.length; i++) {
				if (i == me.current) { continue; }
				me.slides[i.toString()].style.display = "none";
			}
		}, 820);
	}

}
