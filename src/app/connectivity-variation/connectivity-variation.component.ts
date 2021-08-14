import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-connectivity-variation',
  templateUrl: './connectivity-variation.component.html',
  styleUrls: ['./connectivity-variation.component.scss']
})
export class ConnectivityVariationComponent implements OnInit {

  connVarList = [
    { type: 'USB + Bluetooth + WiFi', count: 1311 },
    { type: 'Wired', count: 511 },
    { type: 'Not Specified', count: 401 },
    { type: 'USB Only', count: 344 },
    { type: 'Wired', count: 311 },
    { type: 'Not Specified', count: 201 },
    { type: 'USB Only', count: 134 },
    { type: 'Wired', count: 111 },
    { type: 'Not Specified', count: 41 },
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
    let parentCont = document.querySelector('#connVarContainer');
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
