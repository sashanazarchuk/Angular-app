import { IOrder } from "./orders";
import { IProduct } from "./products";

const product1: IProduct[] = [
    {
        name: "Iphone 14",
        price: 1100,
    },

    {
        name: "Apple Watch",
        price: 300
    },

    {
        name: "Acer Aspire",
        price: 1800
    }
]
const product2: IProduct[] = [
    {
        name: "Monitor Samsung Odyssey G5",
        price: 250,
    },

    {
        name: "Keyboard Skylong SK64",
        price: 180
    }
]
const product3: IProduct[] = [
    {
        name: "Samsung Galaxy S22",
        price: 1200,
    },

    {
        name: "Cover",
        price: 50
    },

    {
        name: "Logitech G332 headset",
        price: 300
    }
]


export const order: IOrder[] = [
    {
        name: "Matthew Order",
        date: new Date(2022, 11, 5),
        isDelivered: true,
        products: product1
    },
    {
        name: "James Order",
        date: new Date(2022, 12, 15),
        isDelivered: false,
        products: product2
    },
    {
        name: "Jennifer Order",
        date: new Date(2023, 1, 17),
        isDelivered: false,
        products: product3
    }
]

