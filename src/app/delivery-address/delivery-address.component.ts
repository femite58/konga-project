import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-address',
  templateUrl: './delivery-address.component.html',
  styleUrls: ['./delivery-address.component.scss']
})
export class DeliveryAddressComponent implements OnInit {
  newAddress = false;
  constructor() { }

  ngOnInit(): void {
  }

}
