// console.log("Hello World!")

const orders = [
    {id: 1, item: "Laptop", paid: true},
    {id: 2, item: "Phone", paid: false},
    {id: 3, item: "Tablet", paid: true}
];

const deliveryData: { [key: string]: string } =
    {
        1: "Delivered in 3 days",
        3: "Delivered in 5 days"
    };

const fetchDeliveryInfo = (orderId: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({orderId, deliveryTime: deliveryData[orderId] || "Unknown"});
        }, 1000)
    })
}

const fetchOrders = () => {
    return new Promise<typeof orders>((resolve, reject) => {
        setTimeout(() => {
            resolve(orders);
        }, 2000);
    })
}

const execute = async () => {
    const filteredOrders = await fetchOrders().then(res => res.filter(order => order.paid));
    const result = await Promise.all(filteredOrders.map(order => fetchDeliveryInfo(order.id)))
    console.log(result);
}

execute();

// 2
type Car = {
    brand: string;
    model: string;
    year: number;
    maxSpeed: number
}

class DynamicFilter<T> {
    collection: T[] = [];

    addItem(item: T): void {
        this.collection.push(item);
    }

    filterByKey<K extends keyof T>(key: K, value: unknown): T[] {
        return this.collection.filter(item => item[key] === value);
    }

    getAllItems() {
        return this.collection;
    }
}

const collection = new DynamicFilter<Car>();

collection.addItem({brand: 'Tesla', model: 'CyberTrack', year: 2021, maxSpeed: 200});
collection.addItem({brand: 'Tesla', model: 'CyberTrack', year: 2022, maxSpeed: 200});
collection.addItem({brand: 'Tesla', model: 'Model X', year: 2021, maxSpeed: 190});
collection.addItem({brand: 'Mazda', model: 'X3', year: 2014, maxSpeed: 220});

console.log(collection.getAllItems());
console.log(collection.filterByKey('year', 2021));
