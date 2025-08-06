// loops o bucles
// una estructura de control // repetir un bloque de codigo mientras una condición sea verdadera 
// tareas repetitivas, automatizar procesos 

// for  - ejecutarse segun lo saltamos, la condición se evalua cada vez que se hace el blucle 

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7,8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemnto: ${numbers[i]}`)
}

// while  se evalua antes de cada interación 

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// bucle incfinito 
//while (true) {
//}

//do while

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of recorrer valores que sea interable (algun tipo de dato)

myArray = [1, 2, 3, 4];

mySet = new Set (["Luisa", "Castelan", "Lulu", 37, true, "luisa@hotmail.com"]);

myMap = new Map([
    ["name", "Luisa"],
    ["email", "luisa@hotmail.com"],
    ["age", 31]
])

myString = "!Hola; JavaScript"

for (let valor of myArray){
    console.log(valor)
}

for (let valor of mySet){
    console.log(valor)
}

for (let valor of myMap){
    console.log(valor)
}

for (let valor of myString){
    console.log(valor)
}

//Buenas practicas 
// cuidar que no se haga un bucle infinito, asegurar que la condicion en algun momento sea false 
//break y continue 
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        continue
    } else if (i == 6){
        break
    }
    console.log(`Hola ${i}`)
}


