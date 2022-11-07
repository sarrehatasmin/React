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
            console.log ("Thrusday");
          break;
        case 5:
            console.log ("Friday");
          break;
        case 6:
            console.log ("Saturday");
      }
