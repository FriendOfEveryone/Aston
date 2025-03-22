// console.log("Hello World!")

interface MyVehicle {
    brand: string;
    model: string;
    year: number;
    accelerate: (amount: number) => void;
    brake: (amount: number) => void;
    info: () => void;
    drive: () => void;
}

interface MyCar extends MyVehicle {
    fuelType: string;
    fuelLevel: number;
    refuel: () => string
}

interface MyElectricCar extends MyCar {
    batteryLevel: number;
    charge: (value: number) => void;
}

class Vehicle implements MyVehicle {
    public brand: string;
    public model: string;
    public year: number;
    protected speed: number;

    constructor(brand: string,
                model: string,
                year: number,
                _speed: number,) {
        this.brand = brand;
        this.model = model;
        this.year = year;

        this.speed = _speed;
    }

    public accelerate(amount: number) {
        this.speed = amount;
    };

    public brake(amount: number) {
        this.speed -= amount;
    };

    public info() {
        console.log(`
        Бренд: ${this.brand} 
        Модель: ${this.model} 
        Год: ${this.year} 
        Текущая/Максимальная скорость: ${this.speed}
        `);
    };

    public drive() {
        console.log(`Поехали ${this.model}!`)
    }

    public static comparison(car1: Vehicle, car2: Vehicle) {
        if (car1.year <= car2.year) return -1;
        else return 1;
    }
}

class Car extends Vehicle implements MyCar {
    public fuelType: string = '';
    public fuelLevel: number = 0;

    constructor(brand: string,
                model: string,
                year: number,
                speed: number,
                fuelType?: string,
                fuelLevel?: number,
    ) {
        super(brand,
            model,
            year,
            speed);
        if (fuelType) this.fuelType = fuelType;
        if (fuelLevel) this.fuelLevel = fuelLevel;
    }

    refuel() {
        return `${this.fuelType} ${this.fuelLevel}`;
    }

    public info() {
        console.log(`
        Бренд: ${this.brand} 
        Модель: ${this.model} 
        Год: ${this.year} 
        Текущая/Максимальная скорость: ${this.speed}
        Заправена на: ${this.fuelLevel}
        Тип топлива: ${this.fuelType}
        `);
    }
}

class ElectricCar extends Car implements MyElectricCar {
    private _batteryLevel: number;

    constructor(brand: string,
                model: string,
                year: number,
                speed: number,
                batteryLevel: number,
                fuelType?: string,) {
        super(brand,
            model,
            year,
            speed,
            fuelType);
        this._batteryLevel = batteryLevel;
    }

    get batteryLevel() {
        return this._batteryLevel;
    }

    set batteryLevel(value: number) {
        this._batteryLevel = value;
    }

    public charge(value: number) {
        if (value < 0) return
        if (this._batteryLevel + value >= 100) {
            this._batteryLevel = 100
            return
        } else {
            this._batteryLevel += value
        }
    };

    public refuel() {
        return `${this.batteryLevel}`;
    }

    public info() {
        console.log(`
        Бренд: ${this.brand} 
        Модель: ${this.model} 
        Год: ${this.year} 
        Текущая/Максимальная скорость: ${this.speed}
        Заряд батареи: ${this.batteryLevel}
        Тип топлива: ${this.fuelType}
        `);
    }
}

const vehicle = new Vehicle('Simple', 'veh', 1999, 100);
vehicle.info();
const car = new Car('Viper', 'Dodge', 3000, 100, '99', 30);
car.info();
const electricCar = new ElectricCar('Tesla', 'CyberTrack', 5000, 250, 34, 'battery');
electricCar.info();

const testDrive = (car: Vehicle) => {
    car.drive()
}

testDrive(vehicle);
testDrive(car);
testDrive(electricCar);

// Методы Drivable уже описаны в Vehicle


const carArr = [car, electricCar, vehicle];
console.log(carArr.sort(Vehicle.comparison));
