//1, Crea una variable para cada operación aritmetica
let i = 2
let x = 10

console.log(i + x);
console.log(i - x);
console.log(i * x);
console.log(i / x);
console.log(i % x);
console.log(i ** x);

//2. Crea una variable para cada tipo de operación de asignación, que haga uso
// de las variables utilizadas para las operaciones aritmeticas

let variable = 10;
console.log(variable);
variable += 10
console.log(variable);
variable -= 10
variable *= 10
variable /= 10
variable %= 10
variable **= 10

//3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(i < x);
console.log(i <= x);
console.log(i == i);
console.log(i === i);
console.log(i == 2);

//4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(i > x);
console.log(i >= x);
console.log(i == x);
console.log(i === x);
console.log(x == 2);

//5. Utiliz el operador logico and

console.log(2 > 10 && 5 > 30);

//6. Utiliza el operador logico or

console.log(2 > 10 || 5 > 30);

//7. Combina ambos operadores logicos

console.log(2 > 10 && 5 > 30 || 30 < 40);

//8. Añade alguna negación 

console.log(!true);

//9. Utiliza el operador ternario 

const isTall = true 
isTall ? console.log("Mide más de 1.70") : console.log("Mide menos de 1.60");

//10. Combina operadores aritmeticos, de comparación y logicas. 

console.log(5 + 10 > 20 + 5  && 5 + 15 || 30 < 40);