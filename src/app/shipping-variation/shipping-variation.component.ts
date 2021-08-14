import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-shipping-variation',
  templateUrl: './shipping-variation.component.html',
  styleUrls: ['./shipping-variation.component.scss']
})
export class ShippingVariationComponent implements OnInit {

  shipVarList = [
    { type: 'Pay on Delivery', count: 702 },
    { type: 'Free Shipping', count: 1979 },
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
    let parentCont = document.querySelector('#shipVarContainer');
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
