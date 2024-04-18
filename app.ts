// Start Coding!  Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "red"
};

console.log(car.model); 

// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations. 
let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
   color: ""
};

car1.color = "blue"; 
car1.year = 2021;

console.log(car1);

// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values. 
function createCar(manufacturer: string, model: string, ... properties: [string, any][]):
any {
 const car: any  = {
    manufacturer,
    model,
     
 };
 for(const[key, value] of properties){
    car[key]= value;
 }
 return car;
}
const mycar: string = createCar("Kia", "Toyota" , ["color", "White"], ["optionalFeatures", "bloutProof"]);

console.log(mycar);