//NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los valores del 1 al 20 

for (let i = 1; i <= 20; i++) {
    console.log(`numero ${i}`)
}

// 2. Crea un bucle que sume todos los numeros del 1 al 100 y muestra el resultado

let suma = 0 
for (let i = 1; i <= 100; i++){
    suma += i;
}
console.log("La suma de los numeros del 1 al 100 es: " + suma);

// 3. Crea un bucle que imprima todos los numeros pares entre 1 y 50 

for (let i = 1; i <= 50; i++){
    if (i % 2 === 0){ // función que verifica si el numero es par, si el residuo es 0 significa que el numero si es par
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola 

myArray = ["Luisa", "Pablo", "Peter", "Jose", "Carlos"];
for (let valor of myArray){
    console.log(valor)
}

// 5. Escribe un bucle que cuente el numero de vocales en una cadena de texto

let palabra = "Murciegalo";
let contador = 0 
let v = 0 

do{
    let letra = palabra[v].toLocaleLowerCase();
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        contador++
    }
    v++
} while (v < palabra.length);

console.log(`La palabra ${palabra} tiene ${contador} vocales.` )

// 6. Dado un array de numeros, usa un bucle para multiplicar todos los numeros y mostrar el producto 

let myArray2 = [1, 2, 3, 4, 5, 6];
let operacion = 1;

for (let i = 0; i < myArray2.length; i++){
    operacion *= myArray2[i];
}
console.log(`La multiplicación de los numeros es: ${operacion} ` );

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5 

let numero = 5 
let m = 1 

while (m <= 10){
    console.log(`${numero} x ${m} = ${numero * m}`)
    m++
}
// 8. Usa unn bucle para invertir una cadena de texto 

let cadena = "JavaScript"
let invertida = ""

for (let i = cadena.length - 1; i >= 0; i--){
    invertida +=cadena[i];
}
console.log(`Texto Original: ${cadena}`);
console.log(`Texto Invertida: ${invertida}`);

// 9. Usa un bucle para generar los primeros 10 numeros de la secuencia de Fibonacci

let n = 20 
let a = 0
let b = 1
let count = 0

console.log("Secuencia de Fibonacci: ");
while (count < n){
    console.log(a);
    let resultado = a + b;
    a = b
    b = resultado;
    count++
}

// 10. Dado un array de numeros, usa un bucle para crear un nuevo array que contenga solo los numeros mayores a 10. 

let numeros2 = [23, 4, 29, 1, 10, 39, 7, 0, 3, 56];
let mayores10 = [];

for (let y = 0; y < numeros2.length; y++){
    if(numeros2[y] > 10){
        mayores10.push(numeros2[y]);
    }
}
console.log(mayores10);