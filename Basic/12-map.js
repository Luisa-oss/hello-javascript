
// Map colección de elementos 
// estructura para almacenar un conjunto de datos 

// Declaración 

let myMap = new Map()

console.log(myMap);

// Inicialización 

myMap = new Map([
    ["name", "Luisa"],
    ["email", "luisa@hotmail.com"],
    ["age", 31]
])

console.log(myMap);

// Metodos y propiedades 

// set  actualizar o agregar un alemento 

myMap.set("alias", "Lulu");
myMap.set("name", "Luisa Castelan");

console.log(myMap);

// get buscar el valor 

console.log(myMap.get("name"));
console.log(myMap.get("surname"));

// has si existe o no existe el valor que buscamos 

console.log(myMap.has("surname"));
console.log(myMap.has("age"));

// delete

myMap.delete("email");

console.log(myMap);

//keys, values, entries

console.log(myMap.keys()); // enlista las clases 
console.log(myMap.values()); // Enlista los valores 
console.log(myMap.entries()); // todo el listado 

// size nos dice cual es el tamaño 

console.log(myMap.size);

//clear

myMap.clear();

console.log(myMap);





