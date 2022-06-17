let name = "Rufus",
    age = 8;

const DOG = {
    name: name,
    age: age,
    bark: function(){
        console.log("Woof Wooof!!");
    }
};

console.log(DOG);
DOG.bark();

const DOG2 = {
    name,
    age,
    breed: "Pitbull",
    bark(){
        console.log("Woof Woof Woooof!!")
    }

}
console.log(DOG2)
DOG2.bark();