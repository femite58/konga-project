import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styleUrls: ['./variation.component.scss']
})
export class VariationComponent implements OnInit {

  openFilter = false;
  openSort = false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  toggleFilter(val, div="") {
    let body = document.body;
    if (div == "") {
      this.openFilter = this.openSort = false;
    } else if (div == 'filter') {
      this.openFilter = val;
    } else {
      this.openSort = val;
    }
    this.openFilter || this.openSort ? body.style.overflowY = "hidden" : body.style.overflowY = "auto";
  }



}
