//Exercice 1

let person = {
    firstName: "Kevin",
    lastName: "BLOPPOPI",
    age: 27,
    greet: function() {
        console.log("Hello my name is " + this.firstName + " " + this.lastName)
    }
}
console.log(person)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercice 2

// Rajout de la function greet dans exo 1
person.greet();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Exercice 3 

person.age = 30;
delete person.lastName;
console.log(person);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Exercice 4

let car = {
    brand: "Citroën",
    model: "C4",
    year: 2016,
    start: function() {
        console.log("The car is starting");
    },
    info: function() {
        return this.brand + " " + this.model + " " + this.year;
    }
};
console.log(car.start());
console.log(car.info());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Exercice 5 

function Car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function () {
        console.log("The car is starting")
    }
}

//test fonctionnement de la fonction
let firstCar = new Car("toyota", "Yaris", 2007);
console.log(firstCar)
firstCar.start()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
