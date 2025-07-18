//1. Concatena dos cadenas de texto 
let nombreCompleto = "Maria Luisa Castelan Perez"
let alias = "lulucita"
let greeting = "Buenas tardes " + alias + "!"
let email = "luisacastelan@gmail,com"
console.log(greeting);

//2. Muestra la longitud de una cadena de texto 
console.log(nombreCompleto.length);

//3. Muestra el primer y ultimo caracter de un string
console.log(greeting[0]);
console.log(greeting[12])

//4. Convierte a mayusculas y minusculas un string 
console.log(nombreCompleto.toUpperCase());
console.log(greeting.toLowerCase());

//5. Crea una cadena de teto en varia lineas
let message = `Hola 
estoy aprendiendo 
a usar 
JavaScript 
Tenganmen 
Paciencia`
console.log(message);

//6. Interpola el valor de una variable en un string
console.log( `Hola, ${nombreCompleto}! ${greeting}! Tu correo es ${email}.`)

//7. Remplaza todos los espacios en blanco de un string por guiones
console.log(greeting.replaceAll(" ", "-"))
console.log(nombreCompleto.replaceAll(" ", "-"));

//8. Comprueba si una cadena de texto contiene una palabra en concreto
console.log(greeting.includes("Buenas"));
console.log(greeting.includes("Luisa"));

//9. Comprueba si dos string son iguales 
console.log(greeting === alias);
console.log(greeting === nombreCompleto);

//10. Comprueba si dos string tienen la misma longitud
function compararLongitud(str1, str2){
    return str1.length === str2.length;
}
console.log(`${greeting} y ${nombreCompleto} tienen la misma longitud ${compararLongitud(greeting, nombreCompleto)}`);