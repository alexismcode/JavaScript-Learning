class Animal {
    
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
        
        super(name,genre);
        this.size = size;
        this.breed = null;
    }

    sound(){
        console.log("I'm a dog and my sound is a bark");
    };

    bark(){
        console.log("Wooooof wooof!")
    };

    //Static Methods: can be executed without the need to instantiate the class
    static whatAreYou(){
        console.log("Dogs are mammalian animals belonging to the canine family. We are considered man's best friends.");
    }

    //Getters and Setters: special methods that allow us to set and get the attribute values of our class.
    get getBreed(){ //use get and also add it to the class name
        return this.breed;
    }
    set setBreed(breed){ //use set and also add it to the class name
        this.breed = breed;
    }
}

Dog.whatAreYou();

const princess = new Animal("Princess", "Female"),
    scooby = new Dog("Scooby", "Male", "Gigant Size");

console.log(princess);
princess.greet();
princess.sound();

console.log(scooby);
scooby.greet();
scooby.sound();
scooby.bark();
console.log(scooby.getBreed);
scooby.setBreed = "Gran Danés";
console.log(scooby.getBreed);
