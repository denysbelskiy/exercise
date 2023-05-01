// Objects
const oneCar = {
  brand: "Ford",
  model: "3",
  color: "grey",
  fuel: "Diesel",
  doors: 4,
  year: 2005,
  checkTankAmount: function () {
    console.log(
      `Hey, you need to drive to the next gas station whith your ${this.brand} ${this.model}.`
    );
  },
};

oneCar.checkTankAmount();

//Object constructor
function CarOC(brand, model, color, fuel, doors, year) {
  (this.brand = brand),
    (this.model = model),
    (this.color = color),
    (this.fuel = fuel),
    (this.doors = doors),
    (this.year = year),
    (this.checkTankAmount = function () {
      console.log(
        `Hey, you need to drive to the next gas station whith your ${this.brand} ${this.model}.`
      );
    });
}

//createe instance

let susannesCar = new CarOC("Mazda", "3", "Gray", "Diesel", 4, 2005);
console.log(susannesCar);

//class vehicle - car, motorcycle, truck, plane, plane, ship, bicycle
class Vehicle {
  constructor(brand, model, color, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(brand, model, color, fuel, doors, year) {
    super(brand, model, color, year);
    this.fuel = fuel;
    this.doors = doors;
  }
  checkTankAmount() {
    console.log(
      `Hey, you need to drive to the next gas station whith your ${this.brand} ${this.model}.`
    );
  }
}

let mustafaCar = new Car("Ford", "Fiesta", "white", "petrol", 2, 1990);
console.log(mustafaCar);
