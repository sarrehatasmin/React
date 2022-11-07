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