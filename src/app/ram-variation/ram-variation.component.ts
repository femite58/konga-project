import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-ram-variation',
  templateUrl: './ram-variation.component.html',
  styleUrls: ['./ram-variation.component.scss']
})
export class RamVariationComponent implements OnInit {

  ramSizeList = [
    { size: '4 GB', count: 2311 },
    { size: '8 GB', count: 804 },
    { size: '16 GB', count: 434 },
    { size: 'None', count: 336 },
    { size: '12 GB', count: 434 },
    { size: '4 GB', count: 10 },
    { size: '8 GB', count: 2 },
    { size: '16 GB', count: 42 },
    { size: '384 GB', count: 1 },
    { size: 'Below 128 MB', count: 5 },
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
    let parentCont = document.querySelector('#ramVarContainer');
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
