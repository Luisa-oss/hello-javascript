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
    ["Enero", 1],
    ["Febrero", 2],
    ["Marzo", 3],
    ["Abril", 4],
    ["Mayo", 5],
    ["Junio", 6],
    ["Julio", 7],
    ["Agosto", 8],
    ["Septiembre", 9],
    ["Octubre", 10],
    ["Noviembre", 11],
    ["Diciembre", 12],
]);

console.log(month);

// 8. Comprueba si el mes numero 5 existe en el map e imprime su valor 

//if (month.has(5)){
    //console.log(`El mes numero 5 es: ${month}`)
//}; //NO SALIO 

// 9. Añade al mapa una clave con un array como que almacene los meses de verano 

month.set("Verano", ["Junio", "Julio", "Agosto"]);
console.log(month);

// 10. Crea un array, transformalo a un set y almacenalo en un map 

//let month2 = Array.from(mySet);
//console.log(month); //NO SALIO 

