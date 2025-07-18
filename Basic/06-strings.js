//Strings (Cadenas de texto)

//Concatenación 

let myName = "Luisa Castelan";
let greeting = "Hola, " + myName + "!"
console.log(greeting);
console.log(typeof greeting);

//Longitud

console.log(greeting.length) // Te indica el tamaño de la cadena de texto 

//Acceso a carateres

console.log(greeting[0]);
console.log(greeting[1]);

//Metodos comunes 

console.log(greeting.toUpperCase()) //conbierte toda la cadena de texto en MAYUSCULAS 
console.log(greeting.toLowerCase()) //Combierte toda la cade de texto en minusculas
console.log(greeting.indexOf("Luisa")) //En que indice se encuentra la el inicio de la palabra
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("MoureDev"))
console.log(greeting.includes("Luisa")) // Si la palabra se encuentra dentro de la cadena de texto
console.log(greeting.includes("Hola"))
console.log(greeting.includes("MoureDev"))
console.log(greeting.slice(0,11))
console.log(greeting.replace("Luisa", "Pablo")) // Remplazar una palabra por otra dentro de la cadena 

//Template literals (Plantillas literales)

let message = `Hola, este 
es mi
curso de 
JavaScript` //acento invertido option + }
console.log(message)

let email = "luisacastelan@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`) //Interpolar una variable 
