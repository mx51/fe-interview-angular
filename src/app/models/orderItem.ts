import { IMenuItem } from "./menuItem";

export interface IOrderItem {
    id: string;
    menuItem: IMenuItem,
    changes?: string;
}