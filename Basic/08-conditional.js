//Condicionales (estructuras de control) 
// if, else if, else

//if (si) - Si pasa esto haz esto  ejecutar un bloque de codigo si una condicion es verdadera 

let age = 37;

if (age == 37) {
    //Bloque de codigo
    console.log("La edad es 37")
}

// else (si no )
if (age == 37) {
    console.log("La edad es 37")
} else {
    console.log("La edad no es 37")
}

// else if (si no, si)

if (age == 37) {
    console.log("La edad es 37")
} else if (age < 18){
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 37, ni es menor de edad")
}

//Operador ternario  (forma ropa de un if y un else)
//forma reducida de la condicion.

const message = age == 37? "La edad es 37" : "La edad no es 37";
console.log(message);

// switch (establecer una condición) una alternativa de anidar un else if 

let day = 3
let dayName 

/**if (day == 0) {
    dayName = "Lunes"
} else if (day == 1) {
    dayName = "Martes"
}*/

switch (day){
    case 0:
        dayName = "Lunes"
        break; // Romper con la ejecución del bloque lo que estan en las llaves 
    case 1:
        dayName = "Martes"
        break;
    case 2:
        dayName = "Miercoles"
        break;
    case 3:
        dayName = "Jueves"
        break;
    case 4:
        dayName = "Viernes"
        break;
    case 5:
        dayName = "Sabado"
        break;
    case 6:
        dayName = "Domingo"
        break;
    default:
        dayName = "Numero de día incorrecto"
}

console.log(dayName)

//*
// Las condiciones complejas no se recomiendan en el switch
// en todos debe tener el break si no se ejecutara de una manera anomala */