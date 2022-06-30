/*
Short Circuit OR: when the value on the left of the expression is validated in TRUE, it will load its default value.

Short Circuit AND: when the value on the left of the expression is validated in FALSE, it will load its default value.
*/
function greet(forename){
    forename = forename || "Unknown";
    console.log(`Hello ${forename}`);
};
greet("Alexis");
greet();
console.log("String" || "Right Value");
console.log(19 || "Right Value");
console.log(true || "Right Value");
console.log([] || "Right Value");
console.log({} || "Right Value");
console.log(false || "Right Value");
console.log(null || "Right Value");
console.log(undefined || "Right Value");
console.log("" || "Right Value");
console.log(-2 || "Right Value");
console.log(0 || "Right Value");

console.log("String" && "Right Value");
console.log(19 && "Right Value");
console.log(true && "Right Value");
console.log([] && "Right Value");
console.log({} && "Right Value");
console.log(false && "Right Value");
console.log(null && "Right Value");
console.log(undefined && "Right Value");
console.log("" && "Right Value");
console.log(-2 && "Right Value");
console.log(0 && "Right Value");