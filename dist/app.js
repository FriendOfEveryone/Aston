"use strict";
// console.log("Hello World!")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const orders = [
    { id: 1, item: "Laptop", paid: true },
    { id: 2, item: "Phone", paid: false },
    { id: 3, item: "Tablet", paid: true }
];
const deliveryData = {
    1: "Delivered in 3 days",
    3: "Delivered in 5 days"
};
const fetchDeliveryInfo = (orderId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ orderId, deliveryTime: deliveryData[orderId] || "Unknown" });
        }, 1000);
    });
};
const fetchOrders = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(orders);
        }, 2000);
    });
};
const execute = () => __awaiter(void 0, void 0, void 0, function* () {
    const filteredOrders = yield fetchOrders().then(res => res.filter(order => order.paid));
    const result = yield Promise.all(filteredOrders.map(order => fetchDeliveryInfo(order.id)));
    console.log(result);
});
execute();
class DynamicFilter {
    constructor() {
        this.collection = [];
    }
    addItem(item) {
        this.collection.push(item);
    }
    filterByKey(key, value) {
        return this.collection.filter(item => item[key] === value);
    }
    getAllItems() {
        return this.collection;
    }
}
const collection = new DynamicFilter();
collection.addItem({ brand: 'Tesla', model: 'CyberTrack', year: 2021, maxSpeed: 200 });
collection.addItem({ brand: 'Tesla', model: 'CyberTrack', year: 2022, maxSpeed: 200 });
collection.addItem({ brand: 'Tesla', model: 'Model X', year: 2021, maxSpeed: 190 });
collection.addItem({ brand: 'Mazda', model: 'X3', year: 2014, maxSpeed: 220 });
console.log(collection.getAllItems());
console.log(collection.filterByKey('year', 2021));
