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
//Acess value using dot notation! object.property
let n = info.name;
console.log(n);
//Acess value using bracket notation! (object.['property])
let a= info['age']
console.log(a);
//Modyfying property value using dot notation
info.name='Sarreha';
console.log(info);
//Modifying property value using bracket notation
info['cgpa']='4';
info['age']='25';
console.log(info);
//Adding new property using dot notation
info.address='Dhaka'
console.log(info);
//Adding new property using bracket notation
info['gender']='female';
console.log(info);