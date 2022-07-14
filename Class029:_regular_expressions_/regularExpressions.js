/*
Expresiones Regulares:
    Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadena de caracteres.

    https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
    https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
*/

let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptalem fuga cupiditale dolores saepe, praesentium sit eaque recusandae id sapiente similique, laudantium voluplatum perferendis en iure ad odio doloremque earum voluptate";

//let expReg = new RegExp("lorem", "ig"); //i -> ignore uppercase and lowercase || g -> take the other matches
let expReg = /lorem/ig;
let expReg2 = /lorem{3}/ig // {} specific repeat numbers

//console.log(expReg.test(str));
//console.log(expReg.exec(str));
console.log(expReg.test(str));
console.log(expReg.exec(str));
console.log(expReg2.test(str));