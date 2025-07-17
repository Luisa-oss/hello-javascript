// Operadores sirven para realizar operaciones 

//Operadores Aritmeticos 
let a = 5;
let b = 10;

console.log(a + b); // Suma 
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División


console.log(a % b); // Modulo el resto de la división
console.log(a ** b); // Exponente 

a++ //Incremento
console.log(a);

b-- //Decremento
console.log(b);

//Operadores de Asignación

let myVariable = 2; 
console.log(myVariable);
myVariable += 2
console.log(myVariable);

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de Comparación

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a > b);
console.log(a == b);
console.log(a == 6); // igualdad por valor
console.log(a == "6"); // igualdad por valor
console.log(a == a);
console.log(a === a); //igualdad por identidad (por tipo y valor)
console.log(a === 6);
console.log(a === "6");
console.log(a != 6); // a es distinto de 6 
console.log(a !== "6");
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "HOLA");
console.log(0 === "");
console.log(undefined = null);
console.log(undefined == null);

// Truthy values (valores verdaderos)
//Todos los numeros positivos y negativos menos el cero
//Todas las cadenas de texto menos las vacias
//El boolean true

//Falsy values (valores falsos)

// 0
// On
// null
// undefined
//NaN
//El boolean false
//Cadenas de texto vacias 

//Operadores logico (comparar valores que comparan el valor boolean)

//and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40); // si una de las expreciones es falsa, el computo es falso

//or (||) Si una de las expreciones es verdadera, el computo es verdadero

console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);

console.log(5 > 10 && 15 > 20 || 30 < 40);

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

//Operadores ternarios  permiter escribir una condicion 

const isRaining = false;

isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo");

