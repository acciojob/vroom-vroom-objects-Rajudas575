// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Add the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize the make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set up inheritance from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;  // Fix the constructor reference

// Add the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); 
console.log(car.getTopSpeed()); 
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;



