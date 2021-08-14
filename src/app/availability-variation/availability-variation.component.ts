import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-availability-variation',
  templateUrl: './availability-variation.component.html',
  styleUrls: ['./availability-variation.component.scss']
})
export class AvailabilityVariationComponent implements OnInit {

  avVarList = [
  	{location: 'In Merchant Store', count: 67097},
  	{location: 'In Konga Warehouse', count: 460},
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
  	let parentCont = document.querySelector('#avVarContainer');
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
