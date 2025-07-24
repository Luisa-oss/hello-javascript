// array (estructura de datos) - alamacenar varios valores en una sola variable 
// cuando queremos manejar listado de elementos 

//Declaración de una array 

let myArray = [] // este es el más recomendable de usar 
let myArray2 = new Array() 

console.log(myArray);
console.log(myArray2);

//Inicialización

myArray = [3];
myArray2 = new Array(3); 

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4); 

console.log(myArray);
console.log(myArray2);

myArray = ["Luisa", "Castelan", "Lulu", 37, true];
myArray2 = new Array("Luisa", "Castelan", "Lulu", 37, true); 

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3); //El listado es ordenado 
myArray2[0] = "Luisa"
myArray2[1] = "Castelan"
myArray2[2] = "Lulu"
myArray2[4] = "Lulu"

console.log(myArray2)

myArray = []
myArray[0] = "Luisa"
//myArray[1] = "Castelan"
myArray[2] = "Lulu"

console.log(myArray)

//Métodos comunes

myArray = []

// push y pop 

myArray.push("Luisa"); //Agrega elementos al array
myArray.push("Castelan");
myArray.push("Lulu");
myArray.push("37");

console.log(myArray);

console.log(myArray.pop());
myArray.pop(); //elimina el ultimo elemento del array  y lo devuelve 

console.log(myArray);

//shift y unshift

console.log (myArray.shift()); //eliminar el primer elemento del array y lo devuelve 
console.log(myArray);

myArray.unshift("Luisa", "Castelan") //agregar uno o más elementos al principio del array 
console.log(myArray);

//length es una propiedad y nos dice cuanto mide un array 

console.log(myArray.length);

// clear como borrar los array 

myArray = []; 
myArray.length = 0 //alternativa que se puede no utilizar 
console.log(myArray)

// slice devolver una copia, generar un array con el pedazo que yo quiero 

myArray.push("Luisa", "Castelan", "Lulu", 37, true);

let myNeewArray = myArray.slice (1, 3);

console.log(myArray);
console.log(myNeewArray);

// splice 

myArray.splice (1, 3);
console.log(myArray);

myArray = ["Luisa", "Castelan", "Lulu", 37, true];

myArray.splice (1, 2,  "Nueva entrada");
console.log(myArray);