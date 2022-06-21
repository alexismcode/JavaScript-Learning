//POO
/*
CLASS: Modelo a seguir.
OBJECTS: Instancia de una clase
 -Attributes: caracteristica o propiedad del objeto (Son variables dentro de un objeto)
 -Methods: acciones que un objeto puede realizar (funciones dentro de un objeto)
*/

const animal = {
    name: "Snoopy",
    sound(){
        console.log("I make sounds because I am alive.")
    }
};
const animal2 = {
    name: "Lola Bunny",
    sound(){
        console.log("I make sounds because I am alive.")
    }
};
console.log(animal);
console.log(animal2);


//Constructure Function (with this)
/*
function Animal(name, genre){
    //Attributes
    this.name = name;
    this.genre = genre;

    //Methods
    this.sound = function(){
        console.log("I make sounds because I am alive.")
    }
    this.greet = function(){
        console.log(`Hello, I'm ${this.name}`)
    }
};
*/

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
    console.log(`Hello, I'm ${this.name}!!`)
}

const snoopy = new Animal("Snoopy", "Male"),
    lolaBunny = new Animal("Lola Bunny", "Female");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sound();
snoopy.greet();
lolaBunny.sound();
lolaBunny.greet();