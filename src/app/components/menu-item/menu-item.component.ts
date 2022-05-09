import { Component, Input, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/models/menuItem';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() menuItem!: IMenuItem;

  imageLocation: string = "./assets/images/";

  // TODO
  addMenuItem() {

  }

  nameToImage(name: string | undefined) {
    return name?.replace(' ', '-').toLowerCase();
  }

}
