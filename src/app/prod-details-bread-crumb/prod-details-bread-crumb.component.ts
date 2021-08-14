import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prod-details-bread-crumb',
  templateUrl: './prod-details-bread-crumb.component.html',
  styleUrls: ['./prod-details-bread-crumb.component.scss']
})
export class ProdDetailsBreadCrumbComponent implements OnInit {
  @Input() activeLink;
  @Input() previousLink;
  @Input() pageTitle;
  constructor() { }

  ngOnInit(): void {
  }

}
