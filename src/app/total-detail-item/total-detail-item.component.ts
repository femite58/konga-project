import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-total-detail-item',
  templateUrl: './total-detail-item.component.html',
  styleUrls: ['./total-detail-item.component.scss']
})
export class TotalDetailItemComponent implements OnInit {
  @Input() test;
  
  constructor() { }

  ngOnInit(): void {
  }

}
