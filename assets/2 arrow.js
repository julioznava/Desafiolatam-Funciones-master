/*Funcion*/

suma = function(a, b){
    return a + b
}

/*Transforma la siguiente función a una arrow function de una línea*/
const suma = (a,b) => (a+b);


/*Pruebas*/

let resultado = suma(2,3);
console.log("Resultado de 2 + 3" + resultado);
resultado = suma("a","b");
console.log("Resultado de a+b"+resultado)
