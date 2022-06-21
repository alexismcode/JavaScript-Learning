//Assign methods to the prototype and not to the function

function Animal(name, genre){
    //Attributes
    this.name = name;
    this.genre = genre;
};

//Methods added to the prototype of the constructor function
Animal.prototype.sound = function(){
    console.log("I make sounds because I am alive.")
}
Animal.prototype.greet = function(){
    console.log(`Hello, I'm ${this.name}`)
}

//Prototypical Inheritances
function Dog(name, genre, size){
    this.super = Animal;
    this.super(name, genre);
    this.size = size;
};

//Dog is inheriting from Animal
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

//Overriding methods from parent to child Prototype
Dog.prototype.sound = function(){
    console.log("I'm a dog and my sound is a bark")
};
Dog.prototype.bark = function(){
    console.log("Woof woof!")
}

const snoopy = new Dog("Snoopy", "Male", "Medium Size"),
    lolaBunny = new Animal("Lola Bunny", "Female");

console.log(snoopy);
console.log(lolaBunny);

snoopy.greet();
snoopy.sound();
snoopy.bark();

lolaBunny.greet();
lolaBunny.sound();