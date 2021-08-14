import { Component, OnInit } from '@angular/core';
import { CollapseHService } from '../collapse-h.service';

@Component({
  selector: 'app-osvariation',
  templateUrl: './osvariation.component.html',
  styleUrls: ['./osvariation.component.scss']
})
export class OSVariationComponent implements OnInit {

  osVarList = [
  	{type: 'Windows 10', count: 3601},
  	{type: 'Windows 8.1', count: 752},
  	{type: 'Mac OS', count: 340},
  	{type: 'Windows 7', count: 201},
  	{type: 'Windows 8.1', count: 152},
  	{type: 'Mac OS', count: 140},
  	{type: 'Others', count: 101},
  	{type: 'Windows 8', count: 52},
  	{type: 'Android', count: 40},
  ];

  opened = true;

  totalCollapseH;

  constructor(private collapseH: CollapseHService) { }

  ngOnInit(): void {
    this.initiateAccordion();
  }

  initiateAccordion() {
    let parentCont = document.querySelector('#osVarContainer');
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
