let forename = "Alexis"
let surname = "Sánchez"

//Concatenate
let greeting = "Hello, my name is " + forename + " " + surname + ".";
console.log(greeting);

//Variable interpolation
//Template String
let greeting2 = `Hello, my name is ${forename} ${surname}.`;
console.log(greeting2);

//With HTML
let ul = "<ul><li>Primavera</li><li>Verano</li><li>Invierno</li><li>Otoño</li></ul>";
console.log(ul);

let ul2 = "<ul>";
ul2 += "<li>Primavera</li>";
ul2 += "<li>Verano</li>";
ul2 += "<li>Invierno</li>";
ul2 += "<li>Otoño</li>";
ul2 += "</ul>";
console.log(ul2)

//Template String with HTML
let ul3 = `<ul>
    <li>Primavera</li>
    <li>Verano</li>
    <li>Invierno</li>
    <li>Otoño</li>
</ul>`;
console.log(ul3);


