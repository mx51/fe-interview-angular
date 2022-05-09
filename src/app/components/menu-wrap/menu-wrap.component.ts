import { Component, OnInit } from '@angular/core';
import { groupBy } from 'lodash';
import { IMenuItem } from 'src/app/models/menuItem';
import { TuckshopApiService } from 'src/app/services/api/tuckshop-api/tuckshop-api.service';
import { ShowOrderService } from 'src/app/services/show-order/show-order';

@Component({
  selector: 'app-menu-wrap',
  templateUrl: './menu-wrap.component.html',
  styleUrls: ['./menu-wrap.component.scss']
})
export class MenuWrapComponent implements OnInit {

  constructor(
    private tuckShopApiService: TuckshopApiService, 
    private showOrderService: ShowOrderService,
    ) { }

  itemsByCategory: {
    [key: string]: IMenuItem[]
  } = {};

  ngOnInit(): void {
    this.tuckShopApiService.getMenuItems().subscribe((menuItems: IMenuItem[]) => {
      this.itemsByCategory = groupBy(menuItems, (menuItem: IMenuItem) => menuItem.category);
    });
  }

  showOrder() {
    this.showOrderService.showOrder();
  }

  // TODO
  orderCount() {
    return 0
  }

}
