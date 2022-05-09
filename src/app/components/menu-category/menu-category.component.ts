import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IMenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent {

  @Input() menuItems: any = [];
  @Input() category: string = '';

}
