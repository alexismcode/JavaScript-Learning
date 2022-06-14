//Expressed Function
const greet = function(){
    console.log("Hello!!")
};

greet();


//Arrow Function
const greet2 = () => {
    console.log("Hello Boy!!")
};

greet2();


//Arrow Function in one line
const greet3 = () => console.log("Hello Men!!");

greet3();

const greet4 = name => console.log(`Hello ${name}!!`);

greet4("Victor");


//Implicit return
const sum = (a,b) => a + b; //eliminated return
console.log(sum(8,9));


//Arrow Function - multiline function
const multilineFunction = () => {
    console.log("One");
    console.log("Two");
    console.log("Three");
};

multilineFunction();


//iterable
const numbers = [1,2,3,4,5];

numbers.forEach((el,i) => console.log(`The Element "${el}" is in position ${i}`));


//capture "this"
const dog = {
    name: "Wicho",
    //bark: function(){console.log(this)} block this
    // bark: () => console.log(this) window this
    bark(){console.log(this)} //correct function
};

dog.bark();
