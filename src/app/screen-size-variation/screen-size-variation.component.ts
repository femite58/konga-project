import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-screen-size-variation',
  templateUrl: './screen-size-variation.component.html',
  styleUrls: ['./screen-size-variation.component.scss']
})
export class ScreenSizeVariationComponent implements OnInit {

  screenSizeList = [
    { size: 15.6, count: 2311 },
    { size: 'Others', count: 804 },
    { size: 14, count: 434 },
    { size: 27, count: 336 },
    { size: 14, count: 434 },
    { size: 27, count: 336 },
    { size: 14, count: 434 },
    { size: 27, count: 336 },
    { size: 14, count: 434 },
    { size: 27, count: 336 },
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
    let parentCont = document.querySelector('#screenContainer');
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
