import {Component} from '@angular/core';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent {
  licenses = [{count: 1, discount: 0}, {count: 2, discount: .1}, {count: 3, discount: .2}];
  price = 10;

  constructor() {
  }

  onLicenseCountChange(discount): void {
    this.price = 10;
    this.price = this.price - this.price * discount;
  }

  onApply(promo) {
    this.price = 10;
    if (promo === 'Test') {
      this.price *= .5;
    }

  }
}
