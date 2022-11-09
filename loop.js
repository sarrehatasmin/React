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

