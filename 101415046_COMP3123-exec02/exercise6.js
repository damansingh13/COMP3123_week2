class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    getCardetails() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); 
        this.balance = balance;
    }
    getSedaninfo() {
        return `${this.model} SD has a balance of $${this.balance.toFixed(2)}`;
    }
}
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.getCardetails());  
const sedan = new Sedan('Volvo', 2018, 30000);
console.log(sedan.getSedaninfo());
