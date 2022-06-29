console.log(console);
console.error("This is an error");
console.warn("This is a warning!");
console.info("This is an informative message");
console.log("Record of what has happened in the application");

let forename = "Alexis",
    surename = "Sánchez",
    age = 19;

console.log(forename);
console.log(surename);
console.log(age);

console.log(forename, surename, age);
console.log(`Hello my name is ${forename} ${surename} and I have ${age}`);
console.log(`Hello my name is %s %s and I have %d`, forename, surename, age);

//console.clear(); clear the console

console.log(window);
console.log(document);

//DIR
console.dir(window);
console.dir(document);

//GROUP
console.group("Hip Hop Artist");
console.log("Eminem");
console.log("2pac");
console.log("Jay Z");
console.log("NWA");
console.log("Notorius BIG");
console.log("Redman")
console.groupEnd();


//TABLE
console.table(Object.entries(console).sort());

const numbers = [1,2,3,4,5];
const vowels = ["a", "e", "i", "o", "u"];

console.table(numbers);
console.table(vowels);

const dogs = {
    name: "Jack",
    breed: "Boxer",
    color: "Brown"
};
console.table(dogs);


//TIME
console.time("How long does my code take?");
const arr = Array(1000000);
for(let i = 0; i < arr.length; i++){
    arr[i] = i;
}
console.timeEnd("How long does my code take?");
console.info("console.log(arr) with 1000000 i");

//COUNT
for(let i = 0; i <= 100; i++){
    console.count("FOR Code");
    console.log(i);
}


let x = 3,
    y = 2,
    testXY = "X must always be less than Y";

console.assert(x < y, {x,y, testXY});