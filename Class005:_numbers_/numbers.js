let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6";

console.log(a, b);

//.toFixed() --> will allow us to see the number of decimals
console.log(c.toFixed(1));
console.log(c.toFixed(5));

//parseInt() --> return only the integer
console.log(parseInt(c));

//Return both the numeric part and the float
console.log(parseFloat(c));

//Lets you know what type of value is the defined value
console.log(typeof c, typeof d);

console.log(a + b);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
