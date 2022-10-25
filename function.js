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
    this.study2();
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