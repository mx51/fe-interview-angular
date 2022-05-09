import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowOrderService {

  orderVisible: boolean = false;

  hideOrder() {
    this.orderVisible = false;
  }

  showOrder() {
    this.orderVisible = true;
  }
  
}
