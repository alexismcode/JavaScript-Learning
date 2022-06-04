//Arithmetic (+ - / * %);

let a = 5 + 5 - 10 * 3;
let module = 5%2;
console.log(a);
console.log(module)

//Relational (>,<,>=,<=,==,===,!=,!==)
console.log(8 > 9);
console.log(0 > 8);
console.log(8 >= 9);
console.log(9 >= 8);
console.log(7 < 7);
console.log(7 <= 7);

// (=): value assignment, (==): value comparison, (===): comparison of data type and values *GOOD PRACTICE*

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);

console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);


//Increment and decrement
let i = 1;
i = i + 2;
i *= 3; //<--- operator
console.log(i);


//Unary operator
let j = 1;
j++; //<-- operator
console.log(j);
j--;
console.log(j);



//Logic operator 
//(!=Not: true in false vice versa)
console.log(!true);
console.log(!false);

//(||=Or: 2 or more conditions, if one is met it will be true)
console.log(9 === 9) || ("9" === 9);

//(&&=And:all conditions are met the result will be true)
console.log(9 === 9) && ("9" === 9);
console.log(9 === 9) && ("9" === "9")

