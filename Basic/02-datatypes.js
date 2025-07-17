//tipos de datos primitivos, los datos en los que se fundamenta la interacción con el lenguaje 
//Son datos basicos e inmutables y representan un solo valor

// Cadena de texto (String)
let name = "Luisa Castelan";
let alias = 'Lulu';
let email = "marialuisacastelan6@gmail.com";

// Números (number)
let age = 31; // Entero
let height = 1.61; //Decimal

//Booleanos (boolean) Si algo es verdadero o falso 
let isStudent = true;
let isTeacher = false;

//Undefind
let undefineValue //variable que no esta inicializada pero si definida 
console.log(undefineValue);

// Null
let nullValue = null; //variable con un valor asociado pero que es nulo intencionalmente pongo el valor nulo

//Symbol representar valores unicos e inmutable, representar identificadores unicos 
let mySymbol = Symbol ("mySymbol");

//BigInt representar un numero extremadamente grande 
let myBigInt = BigInt (8765432345678909876543212345678909876543);
let myBigInt2 = 765432345678909876543212345678909876543n

//Mostramos los tipos de datos 
console.log (typeof name)
console.log (typeof alias)
console.log (typeof email)

console.log (typeof age)
console.log (typeof height)

console.log (typeof isStudent)
console.log (typeof isTeacher)

console.log (typeof undefineValue)

console.log (typeof nullValue)

console.log (typeof null)

console.log (typeof mySymbol)

console.log (typeof myBigInt)
console.log (typeof myBigInt2)
