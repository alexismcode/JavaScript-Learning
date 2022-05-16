//Var = global scope
var hola = "Hola Mundo";

//Let = block scope
let hello = "Hello World";

console.log(hola);
console.log(hello);
console.log(window)

//Examples
console.log("_______________var________________");
var music = "Rock";
console.log("Music variable before block", music);
{
    //Al redeclarar la variable se imprimira la segunda variable
    var music = "Hip Hop";
    console.log("Music variable inside the block", music);
}
console.log("Music variable after block", music);

console.log("________________let_______________");
let music2 = "Rock";
console.log("Music variable before block", music2);
{
    //Al redeclarar la variable se imprimira la segunda variable
    let music2 = "Hip Hop";
    console.log("Music variable inside the block", music2);
}
console.log("Music variable after block", music2);