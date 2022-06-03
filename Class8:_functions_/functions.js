/*
Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son objetos, un tipo especial de objetos:

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
*/

//Declared function

function thisIsAFunction(){
    console.log("One");
    console.log("Two");
    console.log("Three");
};
//Function invocation

thisIsAFunction();


function returnValue(){
    console.log("--> Four <--");
    return "The function has returned a text string";
};

let functionValue = returnValue();
console.log(functionValue);

function greet(forename = "<unknown>", age = 0){
    console.log(`Hello, my name is ${forename} and I'm ${age} years old.`);
};

greet("Alexis", 19);
greet();



//Declared functions vs Expressed functions
declaredFunction();

function declaredFunction(){
    console.log("A declared function that can be called at any time, even before it is declared.");
};

//Anonymus function: When initialized before declaring, marks error.
//EXPRESSED_FUNCTION();

const EXPRESSED_FUNCTION = function(){
    console.log("Expressed function that has a value assigned to a variable");
};

EXPRESSED_FUNCTION();