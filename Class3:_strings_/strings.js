//Strings = text with "" or ''
let forename = "Alexis";
let surname = "Sánchez";
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//With a constructor we can declare a string
//--> let greeting = new String("Hello World!");

console.log(name, surname);
console.log(
    forename.length,
    surname.length,
    forename.toUpperCase(),
    surname.toLowerCase(),
    lorem.includes("magna"),
    lorem.includes("ipsumiouns"),
    lorem,
    lorem.trim(),
    lorem.split(""),
    lorem.split(","),
)