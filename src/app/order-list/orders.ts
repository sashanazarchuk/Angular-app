import { IProduct } from "./products";

export interface IOrder {
    name:string;
    date: Date;
    isDelivered: boolean;
    products: IProduct[];
}