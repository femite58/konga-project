import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  open = false;
  openAddress = { open: false, slideIn: false };
  locationAddress = { open: false, slideIn: false };
  testing = [
    { location_name: 'IKEJA', location_address: '10 MEDICAL ROAD, COMPUTER VILLAGE, Ikeja', tel: '08128337624' },
    { location_name: 'IKEJA', location_address: '13 MEDICAL ROAD, COMPUTER VILLAGE, Ikeja', tel: '08058337624' },
    { location_name: 'ALLEN', location_address: '32 BABALAWO ROAD, COMPUTER VILLAGE, Ikeja', tel: '07028337624' },
    { location_name: 'IKEJA', location_address: '29 MEDICAL ROAD, ALLEN, Ikeja', tel: '08028327624' },
    { location_name: 'VICTORIAL ISLAND', location_address: '10 MEDICAL ROAD, COMPUTER VILLAGE, Ikeja', tel: '08128337624' },
    { location_name: 'CHRIST EMBASSY', location_address: '13 MEDICAL ROAD, COMPUTER VILLAGE, Ikeja', tel: '08058337624' },
    { location_name: 'IKEJA', location_address: '29 MEDICAL ROAD, ALLEN, Ikeja', tel: '08028327624' },
    { location_name: 'IKEJA', location_address: '32 BABALAWO ROAD, COMPUTER VILLAGE, Ikeja', tel: '07028337624' },
  ];
  chosenLoc = { locInd: -1, locInfo: null };
  personalAddTest = [];
  addAddress = false;

  chosenAdd = { locInd: -1, locInfo: null };

  addressForm = new FormGroup({
    'first_name': new FormControl('', [Validators.required]),
    'last_name': new FormControl('', [Validators.required]),
    'tel': new FormControl('', [Validators.required]),
    'street_address': new FormControl('', [Validators.required]),
    'directions': new FormControl('', []),
    'city': new FormControl('', [Validators.required]),
    'state': new FormControl('', [Validators.required]),
    'LGA': new FormControl('', [Validators.required]),
  });

  get first_name() {
    return this.addressForm.get('first_name');
  }
  get last_name() {
    return this.addressForm.get('last_name');
  }
  get tel() {
    return this.addressForm.get('tel');
  }
  get street_address() {
    return this.addressForm.get('street_address');
  }
  get city() {
    return this.addressForm.get('city');
  }
  get state() {
    return this.addressForm.get('state');
  }
  get LGA() {
    return this.addressForm.get('LGA');
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(el, modalstr = "close") {
    if (el.className !== 'addressFormModal'
      && el.className !== 'locationFormModal'
      && el.className !== 'closeAddress'
      && el.className !== 'openAddress'
      && el.className !== 'openLocation'
      && el.parentNode.className !== 'closeAddress') {
      return;
    }
    if (modalstr === 'address') {
      if (!this.openAddress.open) {
        this.openAddress.open = true;
        setTimeout(() => {
          this.openAddress.slideIn = true;
        }, 10);
        return;
      }
    } else if (modalstr === 'location') {
      if (!this.locationAddress.open) {
        this.locationAddress.open = true;

        setTimeout(() => {
          this.locationAddress.slideIn = true;
        }, 10)
        return;
      }
    }
    this.openAddress.slideIn = false;
    this.locationAddress.slideIn = false;
    setTimeout(() => {
      this.openAddress.open = false;
      this.locationAddress.open = false;
    }, 500);
  }

  setLocation(ind) {
    this.chosenLoc.locInd = ind;
    this.chosenLoc.locInfo = this.testing[ind];
  }

  submitAddress() {
    console.log(this.addressForm.value);
    let newAdd = {};
    newAdd['location_name'] = this.addressForm.value.first_name + this.addressForm.value.last_name;
    newAdd['location_address'] = this.addressForm.value.street_address;
    newAdd['tel'] = this.addressForm.value.tel;
    this.personalAddTest.push(newAdd);
  }

  cancel() {
    if (this.personalAddTest.length > 0) {
      this.addAddress = false;
      return;
    }
    this.openAddress.slideIn = false;
    this.locationAddress.slideIn = false;
    setTimeout(() => {
      this.openAddress.open = false;
      this.locationAddress.open = false;
    }, 500);
  }

  setAddress(ind) {
    this.chosenAdd.locInd = ind;
    this.chosenAdd.locInfo = this.personalAddTest[ind];
  }

}
