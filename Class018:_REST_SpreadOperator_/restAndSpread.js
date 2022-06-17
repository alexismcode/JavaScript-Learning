//REST(...   and forEach) new parameters in a function

function sum(a, b, ...c) {
    let result = a + b;
    
    c.forEach(function(n){
        result += n;
    });

    return result;
};


console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));
console.log(sum(1,2,3,4,5,6));
console.log(sum(1,2,3,4,5,6,7));


//Spread (new parameters)

const arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0];

console.log(arr1,arr2);

//concatenate values
const arr3 = [...arr1, ...arr2];
console.log(arr3);