//Como puedo crear una variable
//Variable: La posibilidad de guardar un valor o una referencia a un objeto 

/*var, palabra reservada para declarar variables (la manera original), 
y a esta se le puede cambiar el valor
ESTA FORMA NO SE DEBE DE USAR!*/

var helloWorld = "!Hola, JavaScript¡"; //definicion de variables
console.log(helloWorld);

helloWorld = "!Hola de nuevo, JavaScript¡";
console.log(helloWorld);

//let asignar valores a memoria (propiedades asiganadas a memoria)
// la variable debe de ser inicializada antes de declararla 

let helloWorld2 = "!Hola, JavaScript 2¡";
console.log(helloWorld2);

helloWorld2 = "!Hola de nuevo, JavaScript 2¡";
console.log(helloWorld2);


//const asignar valores a memoria  (valores que no cambian)
// el valor que se le de a la variable no puede ser reasignada

const helloWorld3 = "!Hola, JavaScript 3¡";
console.log(helloWorld3);

//ERROR
//helloWorld3 = "!Hola de nuevo, JavaScript 3¡";
//console.log(helloWorld3);