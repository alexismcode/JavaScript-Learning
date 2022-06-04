//if-else
let age = 17;

if(age > 17){
    console.log("You're of age");
} else{
    console.log("You are underage");
};

if(age >= 18){
    console.log("You're of age");
} else{
    console.log("You are underage");
};

if(age < 18){
    console.log("You are underage");
} else{
    console.log("You're of age");
};

if(age <= 17){
    console.log("You are underage");
} else{
    console.log("You're of age");
};


//if-else if- else
let hour = 15;
if(hour >= 0 && hour <= 5){
    console.log("Let me sleep!!");
} else if(hour >= 6 && hour <= 11){
    console.log("Good Morning!!");
} else if(hour >= 12 && hour <= 18){
    console.log("Good Afternoon!!");
} else{
    console.log("Good Night!!");
}


//Ternary operator(condition) ? true : false

console.log("Ternary Operator");
let youreOfAge = (age >= 18) 
? "You're of age" 
: "You are underage";

console.log(youreOfAge);

// Switch-case
let day = 2;

switch (day) {
    case 0:
        console.log("Today it is Sunday")
        break;
    case 1:
        console.log("Today it is Monday")
        break;
    case 2:
        console.log("Today it is Tuesday")
        break;
    case 3:
        console.log("Today it is Wednesday")
        break;
    case 4:
        console.log("Today it is Thursday")
        break;
    case 5:
        console.log("Today it is Friday")
        break;
    case 6:
        console.log("Today it is Saturday")
        break;
    default:
        console.log("The day does not exist")
        break;
}