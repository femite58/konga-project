import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollapseHService {

  constructor() { }

  genCollapseH(variationItems) {

    let totalH = 0;
    for (let i = 0; i<variationItems.length; i++) {
      let itemH = +getComputedStyle(variationItems[i.toString()]).height.replace('px','');
      totalH += itemH;
    }
    return totalH;
  }
}
