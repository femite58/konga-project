import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-color-variation',
  templateUrl: './color-variation.component.html',
  styleUrls: ['./color-variation.component.scss']
})
export class ColorVariationComponent implements OnInit {

  colorVarList = [
    '#000',
    '#ff0000',
    '#00ffff',
    '#fff',
    '#33cc33',
    '#993399',
    '#919191',
    '#ccc',
    '#660066',
    '#cc99ff',
    '#f8f8f8',
    '#ffff00',
    '#ff9900',
    '#66ff33',
    '#cba925'
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
  	let parentCont = document.querySelector('#colorVarContainer');
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
