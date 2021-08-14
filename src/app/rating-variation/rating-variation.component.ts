import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-rating-variation',
  templateUrl: './rating-variation.component.html',
  styleUrls: ['./rating-variation.component.scss']
})
export class RatingVariationComponent implements OnInit {

  rateVarList = [4, 3, 2, 1];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
  	let parentCont = document.querySelector('#rateVarContainer');
    let variationItems = parentCont.querySelectorAll('.variationItems');
    let me = this;
    if (variationItems.length == 0) {
      setTimeout(() => {
        me.initiateAccordion();
      }, 1000);
      return;
    }

  	this.totalCollapseH = this.collapseH.genCollapseH(variationItems);
  }
}
