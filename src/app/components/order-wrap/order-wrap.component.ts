import { Component, HostBinding } from '@angular/core';
import { TuckshopApiService } from 'src/app/services/api/tuckshop-api/tuckshop-api.service';
import { ShowOrderService } from 'src/app/services/show-order/show-order';

@Component({
  selector: 'app-order-wrap',
  templateUrl: './order-wrap.component.html',
  styleUrls: ['./order-wrap.component.scss']
})
export class OrderWrapComponent {

  constructor(
    private tuckShopApiService: TuckshopApiService,
    private showOrderService: ShowOrderService
    
    ) { }

  @HostBinding('class.show-order')
  addShowClass() {
    return this.showOrderService.orderVisible
  }

  // TODO
  total() {
    return 0;
  }

  // TODO
  itemCount() {
    return 0;
  }

  // TODO
  submitOrder() {
    this.tuckShopApiService.placeOrder([]);
  }

  hideOrder() {
    this.showOrderService.hideOrder();
  }

}
