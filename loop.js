let age=18;
age=Number(age);
if(isNaN(age)){
    console.log("it's not a number");
 } else
    {
        console.log(age<20?"Too old":"Too young");
    }
//switch statement
    switch (new Date().getDay()) {
        case 0:
          console.log ("Sunday");
          break;
        case 1:
            console.log ("Monday");
          break;
        case 2:
            console.log ("Tuesday");
          break;
        case 3:
            console.log ("Wednesday");
          break;
        case 4:
            console.log ("Thursday");
          break;
        case 5:
            console.log ("Friday");
          break;
        case 6:
            console.log ("Saturday");
      }

// for In loop
      const person = {fname:"John", lname:"Doe", age:25};
      for(let x in person){
        //console.log(x);
        console.log(person[x]);

      }
// forIn loop in array. but it's not good to use for In loop in array
      const number = [10,20,10,0,70.90];
      for(let x in number){
        //console.log(x);
        console.log(number[x]);

      }  


// for of loop in array
const cars = ["BMW", "Volvo", "Mini"];
//let text = "";
for (let x1 of cars) {
 console.log(x1);
}
// for Of in string
let person1= "Rikta";
for(let x of person1){
  console.log(x);
}
//while loop
let i=0;
while(i<10){
  console.log("the number is\n",i);
  i++;
}
//crate a map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("Watermelon", 200);
console.log(fruits);
const frut=fruits.get("oranges");
console.log(frut);
console.log(fruits.size);
// List all entries
let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})
console.log(text);
// List all entries
let text1 = "";
for (const x3 of fruits.entries()) {
  text1 += x3;
  console.log(x3);
}
//Regular expression
let text2 = "Visit W3Schools!";
let n = text2.search("W3Schools");
console.log(n);
let text3 = "Visit W3Schools";
let n1 = text3.search(/w3schools/i);
console.log(n1);
let text4 = "Visit Microsoft!";
let result = text4.replace("Microsoft", "W3Schools");
console.log(result);
// this keyword
const person2 = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  getName: function(){

  }
};
console.log(person2.fullName());
//Explicit function binding using call 
const person3 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person4 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
console.log(person3.fullName.call(person4));
//Function borrowing
const person5 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}
let fullName=person5.fullName.bind(member);
console.log(fullName());
//Constructor 
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

launch(){
  console.log(`${this.name} is a good car`);
}
}
const car1= new Car("BMW",2017);
console.log(car1);
car1.launch();
//new example of constructor
class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car2("Ford", 2014);

console.log("My car is " + myCar.age(year) + " years old.");
