//1.2.3 Traduce a código JavaScript las variables del ejemplo anterior y deja
//tu código en los comentarios.

let nombre = "Jessica" ;
let apellido = "Andrango" ;
let usuario = "jeandrango3";
let edad = 18;

let correo = "jeandrango3@espe.edu.ec";
var mayoredad = 18; 
var accion; 

if(edad >= 18) {
    accion = 'Mayor de edad'
} else { // call back 
    accion = 'No es mayor de edad '
}
console.log(accion);

var dineroahorrado = 128.58;
var deudas = 125.21;

//1.2.4 Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:


let nombre2 = "Jessica" ;
let apellido2 = "Andrango" ;

console.log(nombre+apellido)


var dineroahorrado = 128.58;
var deudas = 125.21;
var resultado = dineroahorrado -deudas;
console.log(resultado)

//1.3.2 Convierte el siguiente código en una función, pero, cambiando cuando
// sea necesario las variables constantes por parámetros y argumentos
// en una función:


function mifuncion(name, lastname,  nickname){
const completeName =name+ lastname;
console.log("Mi nombre es "+ completeName + ", pero prefiero que me digas "
+ nickname + ".");
}
mifuncion("Diego Medardo" , "Saavedra Garcia" , "statick");

//1.4.2 Replica el comportamiento del siguiente código que usa la sentencia
// switch utilizando if, else y else if:
const tipoDeSuscripcion1 = "Basic";
switch (tipoDeSuscripcion) {
    case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
    case "Basic":
    console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
    break;
    case "Expert":
    console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
    break;
    case "ExpertPlus":
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
    break;
}

const tipoDeSuscripcion2 = "Basic";
if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}

// 1.4.3 Replica el comportamiento de tu condicional anterior con if, else y
// else if, pero ahora solo con if (sin else ni else if).
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}
if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}
if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}

//1.5.2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos
//while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
    }

i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i ++;
}

//-------------------------------------------------------------------------------

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
    }


i = 10
while (i >= 2) {
    console.log("El valor de i es: " + i);
    i --;
  }

//-------------------------------------------------------------------------------

//1.5.3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto
// es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones,
// pero si responden mal, volvemos a empezar.
i = 0;
while (i != 4) {
    i = prompt("¿Cuánto es 2 +2 ?");
}
console.log('Felicitaciones')

//-------------------------------------------------------------------------------
//1.6.2 Crea una función que pueda recibir cualquier array como parámetro e
// imprima su primer elemento.
function PrimerElementoArreglo(lista) {
    if (Array.isArray(lista) && lista.length > 0) {
      console.log(lista[0]);
    }
}
const miLista1 = [1, 2, 3, 4, 5];
PrimerElementoArreglo(miLista1);

//-------------------------------------------------------------------------------
// 1.6.3 Crea una función que pueda recibir cualquier array como parámetro e
//  imprima todos sus elementos uno por uno (no se vale imprimir el
//    array completo).
function ImprimirArreglo(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i]);
    }
}
const miLista2 = [1, 2, 3, 4, 5];
ImprimirArreglo(miLista2);
//-------------------------------------------------------------------------------
//1.6.4 Crea una función que pueda recibir cualquier objeto como parámetro
// e imprima todos sus elementos uno por uno (no se vale imprimir el
//   objeto completo).
function imprimirElementos(objeto) {
    // Obtener las propiedades del objeto
    var propiedades = Object.keys(objeto);
    
    propiedades.forEach(function(propiedad) {
      // Obtener el valor de la propiedad
      var valor = objeto[propiedad];
      
      // Imprimir la propiedad y su valor
      console.log(propiedad + ": " + valor);
    });
  }
var persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  }; 
   
  imprimirElementos(persona);