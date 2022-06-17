//"In JavaScript everything is an object"
const A = {};
console.log(A);

//Old way of declaring an array
const B = new Object();
console.log(B);


const ALEXIS = {
    forename:"Alexis",
    surname:"Sánchez",
    age:"19",
    hobbys:[
        "Draw", "Exercise", "Program", "Listen to music"
    ],
    maritalStatus:"Single",
    contact:{
        email:"alexismcode@gmail.com",
        instagram:"instagram.com/alexismcode/",
        cellPhone:"+593 987654321"
    },
    greet:function(){
        console.log("Hello :)");
    },
    sayMyName:function(){
        console.log(`My name is ${this.forename} ${this.surname} and I'm ${this.age}. You can follow me on ${this.contact.instagram}`);
    }
}

//Variables are attributes/properties while functions are methods.
console.log(ALEXIS);
console.log(ALEXIS["forename"]);
console.log(ALEXIS["maritalStatus"]);
console.log(ALEXIS.hobbys[2]);
console.log(ALEXIS.contact.instagram);
ALEXIS.greet();
ALEXIS.sayMyName();

//METHODS
//List the data inside the object
console.log(Object.keys(ALEXIS));

//Return values
console.log(Object.values(ALEXIS));

//Confirms if the object has the property that is requested
console.log(ALEXIS.hasOwnProperty("forename"));
console.log(ALEXIS.hasOwnProperty("direction"));