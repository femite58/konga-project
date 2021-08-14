import { Component, OnInit, AfterViewInit, OnDestroy, Input, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-prod-details-image',
  templateUrl: './prod-details-image.component.html',
  styleUrls: ['./prod-details-image.component.scss']
})
export class ProdDetailsImageComponent implements OnInit, AfterViewInit, OnDestroy {
  html;
  scrollEv;
  moreQuant = false;
  quantity = 1;
  quantLimitErr = false;
  @Input() users;
  showPhone = false;
  tel = '07080635700';
  constructor(@Inject(WINDOW) private window: Window, ) { }

  ngOnInit(): void {
    this.html = document.querySelector('html');
  }
  ngOnDestroy() {
    const me = this;
    this.window.removeEventListener('scroll', me.scrollEv)
  }

  ngAfterViewInit() {
    let me = this;
    const topCont = document.querySelectorAll('.topFixedInfoCont')['0'];
    this.scrollEv = scroll;
    scroll();
    this.window.addEventListener('scroll', scroll);
    function scroll() {
      // console.log(me.html.scrollTop);
      if (me.html.scrollTop >= 806) {
        topCont.style.transform = "translateY(0%)";
        return;
      }
      topCont.style.transform = "translateY(-100%)";
    }
  }

  increment(action) {
    if (action === '-' && this.moreQuant) {
      if (this.quantity === 1) {
        return;
      }
      this.quantity--;
    } else if (action === '+' && this.moreQuant) {
      this.quantity++;
    } else {
      if (action === '-' && this.quantity === 1) {
        return;
      }
      this.quantLimitErr = true;
      setTimeout(()=>{
        this.quantLimitErr = false;
      }, 3000);
    }
  }

  filterRating(star) {
    return this.users.filter((item)=>{return item.star === star}).length;
  }

  averageRating() {
    let rate5 = this.filterRating(5)/this.users.length * 5;
    let rate4 = this.filterRating(4)/this.users.length * 4;
    let rate3 = this.filterRating(3)/this.users.length * 3;
    let rate2 = this.filterRating(2)/this.users.length * 2;
    let rate1 = this.filterRating(1)/this.users.length * 1;
    let total = rate5 + rate4 + rate3 + rate2 + rate1;
    return total;
  }
  
  showTel(el) {
    this.showPhone = !this.showPhone;
    if (this.showPhone) {
      el.innerHTML = this.tel;
      return;
    }
    el.innerHTML = 'Click here to show phone number';
  }

}
