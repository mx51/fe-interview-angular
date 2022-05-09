import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IMenuItem } from 'src/app/models/menuItem';
import { IOrderItem } from 'src/app/models/orderItem';
import { ApiService } from '../api.service';

const json_url = 'assets/menu-items.json';

@Injectable({
  providedIn: 'root'
})
export class TuckshopApiService {

  constructor(private apiService: ApiService) { 
  }

  getMenuItems(): Observable<IMenuItem[]> {
    return this.apiService.get<IMenuItem[]>(json_url);
  }

  placeOrder(order: IOrderItem[]) {
    this.apiService.post<IOrderItem[]>('place-order', order).subscribe(result => {});
  }

}
