import { Component, OnInit, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-prod-details-img-slider',
  templateUrl: './prod-details-img-slider.component.html',
  styleUrls: ['./prod-details-img-slider.component.scss']
})
export class ProdDetailsImgSliderComponent implements OnInit {

  slideImgList = [
    'assets/images/recomprod/1.jpg',
    'assets/images/recomprod/2.jpg',
    'assets/images/recomprod/3.jpg',
    'assets/images/recomprod/4.jpg',
  ];

  slideContainer;
  slides;
  indicators;
  indicCont;
  current = 0;
  prevControl;
  nextControl;

  resEvent;

  constructor(@Inject(WINDOW) private window: Window, ) { }

  ngOnInit(): void {
    this.initiateSlide();
  }

  ngOnDestroy() {
    const me = this;
    this.window.removeEventListener('resize', me.resEvent);
  }

  initiateSlide(): void {
    this.slideContainer = document.getElementsByClassName('slideContainer')["0"];
    this.slides = this.slideContainer.querySelectorAll('.slide');
    this.indicCont = document.getElementsByClassName('indicatorCont')["0"];

    let me = this;
    if (this.slides.length == 0) {
      setTimeout(() => {
        me.initiateSlide();
      }, 1000);
      return;
    }
    this.slides[this.current.toString()].style.display = "block";
    this.slideContainer.style.display = "block";
    this.responsive();
    if (this.indicCont !== undefined) {
      this.indicCont.style.display = "flex";
    }
      
    
    this.resEvent = resize;
    
    this.window.addEventListener('resize', resize);
    
    function resize() {
      me.responsive();
    }
  }

  responsive(): void {
    const activeH = +getComputedStyle(this.slides[this.current.toString()]).height.replace('px', '');
    this.slideContainer.style.height = activeH + "px";
  }

  fadeSlide(n, action = "seqSlide"): void {
    if (action === 'seqSlide') {
      this.current += n;
      if (this.current >= this.slides.length) { this.current = 0 }
      if (this.current < 0) { this.current = (this.slides.length - 1) }
    } else {
      this.current = n;
    }

    this.slides[this.current.toString()].style.display = "block";
    this.responsive();
    let me = this;
    setTimeout(() => {
      for (let i = 0; i < me.slides.length; i++) {
        if (i == me.current) { continue; }
        me.slides[i.toString()].style.display = "none";
      }
    }, 820);
  }

}
