const NUMBERS = [1,2,3];

//without destructuring
let uno = NUMBERS[0],
    dos = NUMBERS[1],
    tres = NUMBERS[2];

console.log(uno,dos,tres);

//with destructuring
const [one,two,three] = NUMBERS;
console.log(one,two,three);


const person = {
    forename: "Alexis",
    nacionality: "Ecuadorian",
    age: 19
}

let {forename, nacionality, age} = person;
console.log(forename, nacionality, age);
