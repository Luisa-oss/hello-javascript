// if/ else / else if/ ternaria 

//1. Imprime por consola tu nombre si una variable toma su valor 

if (myName = "Luisa Castelán");
console.log(myName);

// 2. Imprime por consola un mensaje si el usuario y contraseña conciden con unos establecidos



// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 5; // El numero es esta variable se debe de cambiar para ejecutar! 

if(number > 0) {
    console.log("El numero es positivo")
} else if (number < 0){
    console.log("El numero es negativo")
} else {
    console.log("El numero es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan

let age = 18;
const edadMinima = 18;

if (age >= edadMinima) {
    console.log("Puede Votar")
} else {
    let añosFaltantes = edadMinima - age;
    console.log(`Te faltan, ${añosFaltantes} años! para poder votar.`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad

const message = age == 18? "La persona es un DULTO" : "La persona es un MENOR"
console.log(message);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let month = 2 // se cambia el numero del mes que inicia una estación del año
let season

if (month >= 3 && month <= 5) { //rangos de meses 
    season = "Primavera"
} else if (month >= 6 && month <= 8) {
    season = "Verano"
} else if (month >= 9 && month <= 11) {
    season = "Otoño"
} else if (month == 12 || (month >= 1 && month <= 2)) {
    season = "Invierno"
}
console.log(`La estación de este mes es: ${season}.`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let monthDay = 'ENERO'
let day

if (monthDay == 'ENERO') {
    day = "31"
} else if (monthDay == 'FEBRERO') {
    season = "28"
} else if (monthDay == 'MARZO') {
    season = "31"
} else if (monthDay == 'ABRIL') {
    season = "30"
} else if (monthDay == 'MAYO') {
    season = "31"
} else if (monthDay == 'JUNIO') {
    season = "30"
} else if (monthDay == 'JULIO') {
    season = "31"
} else if (monthDay == 'AGOSTO') {
    season = "31"
} else if (monthDay == 'SEPTIEMPRE') {
    season = "30"
} else if (monthDay == 'OCTUBRE') {
    season = "31"
} else if (monthDay == 'NOVIEMBRE') {
    season = "30"
} else if (monthDay == 'DICIEMBRE') {
    season = "31"
}

console.log(`El mes de ${monthDay} tiene ${day} días.`);


//switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = 0
let greeting 

switch (language){
    case 0:
        greeting = "Hola, buen día!"
        break;
    case 1:
        greeting = "Hello, good morning!"
        break;
    case 2:
        greeting = "Bonjour"
        break;
    case 3:
        greeting = "Aloha, kakahiaka"
        break;
    default:
        greeting = "Saludo NO disponible"
}
console.log(greeting)


// 9. Usa un switch para hacer de nuevo el ejercicio 6

let month2 = 8 // se cambia el numero del mes que inicia una estación del año
let season2

switch (month2){
    case 0:
        season2 = "Primavera"
        break;
    case 1:
        season2 = "Verano"
        break;
    case 2:
        season2 = "Otoño"
        break;
    case 3:
        season2 = "Invierno"
        break;
    default:
        season2 =  null //"Error al ingresar los datos"
}
//console.log(`La estación de este mes es: ${season2}.`); (Forma incorrecta)
console.log(season2 ? `La estación de este mes es: ${season2}.` : "Error al ingresar los datos")


// 10. Usa un switch para hacer de nuevo el ejercicio 7

let monthDay2 = 'ENERO'
let day2

switch (monthDay2){
    case 'ENERO':
        day2 = 31
        break;
    case "FEBRERO":
        day2 = 28
        break;
    case `MARZO`:
        day2 = 31
        break;
    case `ABRIL`:
        day2 = 30
        break;
    case `MAYO`:
        day2 = 31
        break;
    case `JUNIO`:
        day2 = 30
        break;
    case `JULIO`:
        day2 = 31
        break;
    case `AGOSTO`:
        day2 = 31
        break;
    case `SEPTIEMBRE`:
        day2 = 30
        break;
    case `OCTUBRE`:
        day2 = 31
        break;
    case `NOVIEMBRE`:
        day2 = 30
        break;
    case `DICIEMBRE`:
        day2 = 31
        break;
    default:
        day2 = null //"El mes capturado no existe"
} 
//console.log(`El mes de ${monthDay2} tiene ${day2} días.`); (esta forma NO es correcta)
// console.log(day2 !== null ? `El mes de ${monthDay2} tiene ${day2} días.` : "El mes capturado no existe"); (Esta forma es correcta)
console.log(day2 ? `El mes de ${monthDay2} tiene ${day2} días.` : "El mes capturado no existe");




