const A = [];
const B = [1, true, "Hello", ["A", "B", "C", [1,2,3]]];
console.log(A);
console.log(B);
console.log(B[2]);
console.log(B[3][2]);
console.log(B[3][3][0]);

//ECMA Script 6
const C = Array.of("X","Y","Z",9,8,7);
console.log(C);

const D = Array(10).fill(false);
console.log(D);

//Old way of declaring an array
const E = new Array("- new Array -");
console.log(E);

const F = new Array(1,2,3, true, false);
console.log(F);

//METHODS
const COLORS = ["Red", "Green", "Blue"];
console.log(COLORS);

//Add element
COLORS.push("White");
console.log(COLORS);

//Remove element
COLORS.pop();
console.log(COLORS)

//Call back
COLORS.forEach(function (el, i){
    console.log(`<li id="${i}">${el}</li>`);
});
