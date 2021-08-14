import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-hard-drive-variation',
  templateUrl: './hard-drive-variation.component.html',
  styleUrls: ['./hard-drive-variation.component.scss']
})
export class HardDriveVariationComponent implements OnInit {

  hddVarList = [
    { type: '500 GB', count: 1601 },
    { type: '1 TB', count: 1591 },
    { type: '256 GB', count: 901 },
    { type: '512 GB', count: 892 },
    { type: '1 TB', count: 891 },
    { type: '256 GB', count: 731 },
    { type: '512 GB', count: 621 },
    { type: '1 TB', count: 591 },
    { type: '256 GB', count: 61 },
    { type: '512 GB', count: 42 },
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
    let parentCont = document.querySelector('#hddVarContainer');
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
