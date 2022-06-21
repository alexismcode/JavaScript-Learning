class Animal {
    //Constructor is a special method that is executed when instantiating a class.
    constructor(name, genre){
        this.name = name;
        this.genre = genre;
    }

    //Methods
    sound(){
        console.log("I make sounds because I am alive.");
    }
    greet(){
        console.log(`Hello, I'm ${this.name}`);
    }
}

class Dog extends Animal {
    constructor(name,genre,size){
        //super() commands to call the constructor of the Parent class
        super(name,genre);
        this.size = size;
    }

    sound(){
        console.log("I'm a dog and my sound is a bark");
    };

    bark(){
        console.log("Wooooof wooof!")
    }
}

const mimi = new Animal("Mimi", "Female"),
    scooby = new Dog("Scooby", "Male", "Gigant Size");

console.log(mimi);
mimi.greet();
mimi.sound();
console.log(scooby);
scooby.greet();
scooby.sound();
scooby.bark();