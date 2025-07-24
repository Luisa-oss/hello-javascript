// set 
//No se maneja con un indice que corresponde a la posición 

//Declaración

let mySet = new Set()
//let mySet2 = {} //esta no es una forma de declarar un set vacio 

console.log(mySet);


//Inicialización

mySet = new Set (["Luisa", "Castelan", "Lulu", 37, true, "luisa@hotmail.com"]);

console.log(mySet);

//Métodos comunes 

// add y delete

mySet.add("hhttps.luisa"); //añade al final

console.log(mySet);

mySet.delete("hhttps.luisa") // se indica cual es el elemento que se quiere borrar 

console.log(mySet);

console.log(mySet.delete("Luisa"));

console.log(mySet);

// has si existe o no un elemento 

console.log(mySet.has("Lulu")); 
console.log(mySet.has("Luisa"));

// size tamaño 

console.log(mySet.size);

// convertir un set a array 

let myArray = Array.from(mySet);
console.log(myArray);

mySet = new Set(myArray);
console.log(mySet);

// No admite duplicados 

mySet.add("luisa@hotmail.com");
mySet.add("luisa@hotmail.com");
mySet.add("luisa@hotmail.com");
console.log(mySet);
