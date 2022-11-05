// create function

function student (studentName){
    console.log(studentName +" is a brilliant student");
}

student("Rikta");
student("Nitish");
student("Tasmin");

 // function with many parameters
function child (childName,bornPlace,time){
    console.log(childName + " is born in " + bornPlace +"  at " + time);
}
child(" Sany"," Rajshahi","9 pm");
child(" Safi"," Mohadevpur","10 pm");
//Create object
const stu={
fullName: "Sarreha Tasmin Rikta",
address:"Naogaon",
maritalStatus:"Unmarried",
age:23,

study: function (person,time){
console.log(person + " is studying from"+time);
 },

 study2: function (person,time){
    console.log(person + " is studying from"+time);
    },

};
// access function property from an object
 stu.study("Riku","9 pm");
stu.study("Tasmin","8 pm");

 stu.study2("Rikta","7 pm");
stu.study2("Tasnuva","10 pm");
// access property
console.log(stu.fullName);
console.log(stu["address"]);
//object length
let text= "Amar Sonar Bangla ami tomai valobashi";
console.log(text.length);
//Escape character
let text1= "I love my \"parents\" very much";
console.log(text1);
//Extracting String Parts
let str= "My name is Rikta";
console.log(str.slice(11,16));
console.log(str.slice(-6,-2));
// replacing a word
let text2="My name is Sarreha";
let newtext2=text2.replace("Sarreha","Rikta");
console.log(newtext2);
//string search
let stri = "Please locate where 'locate' occurs!";
console.log(stri.indexOf("where"));
// template literal
let template=`Nice to meet you, you are
a beatiful lady with kind heart`;
console.log(template);
let temp1 = "bangladesh";
let a=17;
let b= 1;
console.log(` i love my ${temp1} and it's population is ${a+b} corer`);
// Number method
let x=123;
x.toString();
let newN= x.toString();
console.log(typeof newN);
let newNum=(100+23).toString;
console.log(typeof newNum);
let num = Number.EPSILON;
console.log(num);
let num1 = Number.MAX_VALUE;
console.log(num1);
// looping array elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

for (let i = 0; i < fLen; i++) {
    console.log (fruits[i]);
}

//foreach function for array
 const names =["Rikta", "Tasmin", "Sarreha", "Riku"];

  function myName (value){
console.log(value);
 }
 names.push("Tasnim");
 names.splice(0,2,"Sarreha","Tasmin");
 names[names.length]="Sanymon";
names.forEach(myName);
//merging three arrays. It is used instead of splice
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
const arr4 = ["Nisi", "mamun"];
const arr5 = ["Emli",  "Linus"];
const myChildren1=arr4.concat(arr5,"Nitish","Biswas");
console.log(myChildren1);
console.log(myChildren1.sort());
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.sort());
console.log(fruits2.reverse());
//sort number in ascending order
const num2=[45, 90, 2, 80,32];
num2.sort(function myNum(a,b){
    return a-b;
})
console.log(num2);
//sort number in descending order
const num3=[45, 90, 2, 80,32];
num3.sort(function myNum(a,b){
    return b-a;
})
console.log(num3);
console.log (Math.max(45.23,30,100));
console.log (Math.min(50, 10, 6, 90));
// sorting object arrays
const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  cars.sort(function myCars(a,b){

return a.year-b.year;
  })
 console.log(cars);
 cars.sort(function myCars(a,b){
    let x=a.type.toLowerCase();
    let y=b.type.toLowerCase();
    if(x<y){return -1};
    if (x>y){return 1};
    return 0;
 })
 console.log(cars);
 // array method (for each)
 const numbers1=[23, 1, 80,42,40,20];
 function myNumbers(value, index, array){
        console.log(value);
        console.log(index);
        console.log(array);
        console.log("***********************");
        
 }
 numbers1.forEach(myNumbers);
 //map method
 const numbers2=[23, 1, 80,42,40,20];
 function myNumbers1(value, index, array){
        console.log(index);
        console.log(array);
        console.log("------------"); 
        return value*2;
        
 }

 const newNums= numbers1.map(myNumbers1);
 console.log(newNums);
 //filter method

 const numbers3=[20, 10, 80,40,40,30];
 function myNumbers3(value, index, array){
        console.log(index);
        console.log(array);
        console.log("------------"); 
        return value>20;
        
 }

 const newNums1= numbers3.filter(myNumbers3);
 console.log(newNums1);
 //reduce method
 const numbers4=[20, 10, 80,40,40,30];
 function myNumbers4(total,value, index, array){
        console.log(total);
        console.log(index);
        console.log(array);
        console.log("------------"); 
        return value+total;
        
 }

 const newNums2= numbers4.reduce(myNumbers4);
 console.log(newNums2);
 //every method
 const numbers5 = [45, 4, 9, 16, 25];

function myFunction2(value, index, array) {
  return value > 18;
}
const everyNum= numbers5.every(myFunction2);
console.log(everyNum);
//indexOf method
const fruits3 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits3.indexOf("Mango");
console.log(position);
//lastindexof
const fruits6 = ["Apple", "Orange", "Apple", "Mango"];
let position2 = fruits.lastIndexOf("Apple")+1;
console.log(position2);
//includes method
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits7.includes("Pineapple"));
//fund method

const numbers6 = [4, 9, 16, 25, 29];
function myFunction3(value, index, array) {
  return value > 18;
}
let first = numbers6.find(myFunction3);
console.log(first);
