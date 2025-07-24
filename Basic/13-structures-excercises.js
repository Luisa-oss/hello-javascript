// 1. Crea un array que enlace 5 animales 

let animals = [];
console.log(animals);

animals = [5];
console.log(animals);

animals = ["foca", "pajaro", "perro", "gato", "delfin"];
console.log(animals);

// 2. Añade dos más, uno al principio y otro al final 

animals.push("jirafa"); // agregado al final 
console.log(animals);

animals.unshift("raton"); // agregado al principio
console.log(animals);

// 3. Elimina el que se encuentre el tercera posición

animals.splice(3, 1); // mayor explicación 
console.log(animals);

// 4. Crea un set que almacene 5 libros 

let books = new Set();
books = new Set (["book1", "book2", "book3", "book4", "book5"]);
console.log(books);

// 5. Añade dos mas, uno de ellos repetido 

books.add("book7");
books.add("book7");
books.add("book8");
console.log(books);

// 6. Elimina un cocreto a tu elección 

books.delete("book4");
console.log(books);

// 7. Crea un mapa que asocie el numero del mes a su nombre 

let month = new Map ();
month = new Map ([
    [1, "Enero"],
    [2, "Febrero",],
    [3, "Marzo",],
    [4, "Abril",],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
]);

console.log(month);

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor 

if (month.has(5)){ // dentro del parentecis del has va la clave que se quiere buscar 
    console.log(`El mes numero 5 es: ${month.get(5)}`);
} else {
    console.log("No se encontro el mes nuemro 5");
} 

// 9. Añade al mapa una clave con un array como que almacene los meses de verano 

month.set("Verano", ["Junio", "Julio", "Agosto"]);
console.log(month);

// 10. Crea un array, transformalo a un set y almacenalo en un map 

let animals2 = ["foca", "pajaro", "perro", "gato", "delfin"]; // Se crea primero el array 
let mySet = new Set (animals2); // Convertir el array en un set con new Set
console.log(mySet); // Imprimir el set 





