//Const = variable that will not change
const PI = 3.1416;
//const NUEVE; --> Cannot have empty constants.
console.log(PI);
//PI = 3,15; --> Can't change its value.


//you can modify object properties but it remains constant
const object = {
    name: "Alexis",
    age: 20
};

const colors = ["white", "black", "blue"];

console.log(object);
console.log(colors);

object.email = "alexismcode@gmail.com";
colors.push("orange");

console.log(object);
console.log(colors);