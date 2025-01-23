/*Funcion*/

function example(a, b, c){
  return a+b+c
}


/*Transforma esta declaración de función a una función de expresión*/
example = function (a, b, c) {
    return a + b + ;
};

/*Pruebas*/

let resultado = example(1, 2, 3);
console.log(resultado);
resultado = example("hola ", "como ", "estas");
console.log(resultado);
