export enum MenuCategory {
    Burger = "Burger",
    Side = "Side",
    Drink = "Drink"
}

export interface IMenuItem {
    id: string;
    name: string;
    price: number;
    category: MenuCategory;
}