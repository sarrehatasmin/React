console.log("helloo");
// string literal
let name="Rikta";
console.log(typeof name);
name= '25'
console.log(typeof name);
// Object literal
let info= {
    'name': 'Rikta',
    'bloodGroup': 'A+',
    'cgpa': '3.93',
    'age': '23'
}
console.log(info);
//object.property
let n = info.name;
console.log(n);
//object.['property]
let a= info['age']
console.log(a);
info.address='Dhaka'
console.log(info);
//dot notation
console.log(info.bloodGroup);
//bracket notation
console.log(info['bloodGroup']);
info['gender']='female';

console.log(info);