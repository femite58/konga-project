import { Component, OnInit, AfterViewInit, OnDestroy, Input, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Component({
  selector: 'app-prod-desc-overview',
  templateUrl: './prod-desc-overview.component.html',
  styleUrls: ['./prod-desc-overview.component.scss']
})
export class ProdDescOverviewComponent implements OnInit, AfterViewInit, OnDestroy {
  selected = 'overview';
  resEvent;
  overviewAvail = true;
  warrantyAvail = false;
  reviewAvail = true;
  retPolicyAvail = true;
  @Input() users;
  
  collapseItem = {
    overview : {height: 0, open: false},
    description: {height: 0, open: false},
    shipping: {height: 0, open: false},
    warranty: {height: 0, open: false},
    retPolicy: {height: 0, open: false},
    review: {height: 0, open: false}
  }

  constructor(@Inject(WINDOW) private window: Window, ) { }

  ngOnInit(): void {
  }
  
  ngOnDestroy() {
    const me = this;
    this.window.removeEventListener('resize',me.resEvent);
  }
  
  ngAfterViewInit() {
    const winWidth = this.window.innerWidth;
    if (winWidth <= 767) {
      this.responsive();
    }
    const me = this;
    this.resEvent = resize;
    this.window.addEventListener('resize', resize);
    function resize() {
      const reswinw = this.window.innerWidth;
      if (reswinw <= 767) {
        me.responsive();
      }
    }
  }

  responsive() {
    let mobile = document.getElementsByClassName('mobileAcc')["0"];

    const overview = mobile.getElementsByClassName('overview')['0'];
    const description = mobile.getElementsByClassName('description')['0'];
    const shipping = mobile.getElementsByClassName('shipping')['0'];
    const warranty = mobile.getElementsByClassName('warranty')['0'];
    const retPolicy = mobile.getElementsByClassName('retPolicy')['0'];
    const review = mobile.getElementsByClassName('review')['0'];

    const overviewH = +getComputedStyle(overview).height.replace('px','');
    const descriptionH = +getComputedStyle(description).height.replace('px','');
    const shippingH = +getComputedStyle(shipping).height.replace('px','');
    const warrantyH = +getComputedStyle(warranty).height.replace('px','');
    const retPolicyH = +getComputedStyle(retPolicy).height.replace('px','');
    const reviewH = +getComputedStyle(review).height.replace('px','');
    
    this.collapseItem.overview.height = overviewH;
    this.collapseItem.description.height = descriptionH;
    this.collapseItem.shipping.height = shippingH;
    this.collapseItem.warranty.height = warrantyH;
    this.collapseItem.retPolicy.height = retPolicyH;
    this.collapseItem.review.height = reviewH;
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

  noOfComments() {
    return this.users.filter((user) => {return user.comment !== ''}).length;
  }

}
