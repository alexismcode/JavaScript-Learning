//while

let counter = 0;

while (counter < 10) {
    counter++;
    console.log(`While: ${counter}`);
};


//do while

do{
    counter++;
    console.log(`Do While: ${counter}`);
}while(counter < 20);


//for
/*
for(variable inizalization; condition; decrease or increase){
    for statement
    for statement
}*/

for (let i = 0; i < 10; i++) {
    console.log(`For: ${i}`);
};

let numbers = [10,20,30,40,50,60,70,80,90];
for(let i = 0; i < numbers.length; i++){
    console.log(`Numbers with for: ${numbers[i]}`);
};


//For - in
const ALEXIS = {
    forename: "Alexis",
    surname: "Sanchez",
    age: 19
};

for (const prop in ALEXIS) {
    console.log(`Key: ${prop}, Value: ${ALEXIS[prop]}`);
};


//For - of
let text = "Say Hi!";

for (const elem of text) {
    console.log(`For of: ${elem}`);
};