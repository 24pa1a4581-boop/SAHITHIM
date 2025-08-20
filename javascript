//Variables
var city = "Hyderabad"; 
let age = 20;           
const country = "India"; 
console.log(city, age, country);

//Arrays
et fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("Orange");
console.log(fruits);

//Functions
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Sahithi"));

//Objects
let student = {
    name: "Sahithi",
    age: 18,
    course: "AI & DS"
};
console.log(student.name);
console.log(student["course"]); 

//Loops
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
//While loop
let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}
// For...of loop with array
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}
