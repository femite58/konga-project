import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-battery-variation',
  templateUrl: './battery-variation.component.html',
  styleUrls: ['./battery-variation.component.scss']
})
export class BatteryVariationComponent implements OnInit {

  batVarList = [
  	{type: 'Yes', count: 1311},
  	{type: '3 CELL Battery', count: 711},
  	{type: '4-cell Li-ion battery', count: 521},
  	{type: '6 Cell Battery', count: 412},
  	{type: '3 CELL Battery', count: 711},
  	{type: '4-cell Li-ion battery', count: 521},
  	{type: '6 Cell Battery', count: 312},
  	{type: '3 CELL Battery', count: 211},
  	{type: '4-cell Li-ion battery', count: 21},
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
  	let parentCont = document.querySelector('#batVarContainer');
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
