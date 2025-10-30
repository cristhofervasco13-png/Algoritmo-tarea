//bloque1
//Ejercicio 1
function ContarCaracteres() {
  let Frase = prompt("Ingrese una Frase:");
  let cantidadCaracteres = Frase.length;
  alert("La cantidad de caracteres es: " + cantidadCaracteres);
}
//Ejercicio 2
function ContarVocales() {
   let titulo = prompt("Escribe un título:");
let vocal = prompt("Escribe una vocal:");
let contador = 0;
for (let i = 0; i < titulo.length; i++) {
  if (titulo[i] == vocal) {
    contador = contador + 1;
  }
}
alert("La vocal " + vocal + " aparece " + contador + " veces.");
}
//Ejercicio 3
function InvertirNombre() {
  let nombre = prompt("Ingrese su nombre:");
  let nombreInvertido = "";
  for (let i = nombre.length - 1; i >= 0; i--) {
    nombreInvertido += nombre[i];
  }
  alert("Su nombre invertido es: " + nombreInvertido);
}
//Ejercicio 4
//comparar nombres por longitud
function CompararNombres() {
  let nombre1 = prompt("Ingrese el primer nombre:");
  let nombre2 = prompt("Ingrese el segundo nombre:");
  if (nombre1.length > nombre2.length) {
    alert("El primer nombre es más largo.");
  } else if (nombre1.length < nombre2.length) {
    alert("El segundo nombre es más largo.");
  } else {
    alert("Los nombres tienen la misma longitud.");
  }
}
//Ejercicio 5
//obtener iniciales de un cargo profesional
function ObtenerIniciales() {
  let cargo = prompt("Ingrese su cargo profesional:");
  let iniciales = "";
      iniciales += cargo[0]+ ".";
  for (let i = 0; i < cargo.length; i++) {
    if (cargo[i] === " ") {
      iniciales += cargo[i + 1]+ ".";
    }
  }
  alert("Las iniciales de su cargo profesional "+(cargo) + " son: "+iniciales);
}
//bloque2
//Ejercicio 1
//contar caracteres de varias frases publicitarias
function ContarCaracteresFrases() {
  let totalCaracteres = 0;
  let cantidadFrases = parseInt(prompt("¿Cuántas frases desea ingresar?"));
  let frases = [];
  for (let i = 0; i < cantidadFrases; i++) {
    let frase = prompt("Ingrese la frase " + (i + 1) + ":");
    frases.push(frase);
  }
  for (let i = 0; i < frases.length; i++) {
    totalCaracteres += frases[i].length;
  }
  alert("El total de caracteres en las frases ingresadas es: " + totalCaracteres);
}
//Ejercicio 2
//Dado un arreglo de titulos y una vocal especifica, contar cuantos caracteres tiene cada una
function ContarVocalesEnTitulos() {
  let cantidadTitulos = parseInt(prompt("¿Cuántos títulos desea ingresar?"));
  let vocal = prompt("Ingrese la vocal que desea contar:");
  let titulos = [];
  for (let i = 0; i < cantidadTitulos; i++) {
    let titulo = prompt("Ingrese el título " + (i + 1) + ":");
    titulos.push(titulo);
  }
  for (let i = 0; i < titulos.length; i++) {
    let contador = 0;
    for (let j = 0; j < titulos[i].length; j++) {
      if (titulos[i][j] === vocal) {
        contador++;
      }
    }
    alert("La vocal " + vocal + " aparece " + contador + " veces en el título " + (i + 1) + ".");
  }
}
//Ejercicio 3
//invertir los nombres de varios productos
function InvertirNombresProductos() {
  let cantidadProductos = parseInt(prompt("¿Cuántos productos desea ingresar?"));
  let nombresProductos = [];
  for (let i = 0; i < cantidadProductos; i++) {
    let nombreProducto = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
    nombresProductos.push(nombreProducto);
  }
  for (let i = 0; i < nombresProductos.length; i++) {
    let nombreInvertido = "";
    for (let j = nombresProductos[i].length - 1; j >= 0; j--) {
      nombreInvertido += nombresProductos[i][j];
    }
    alert("El nombre del producto " + (i + 1) + " invertido es: " + nombreInvertido);
  }
}
//Ejercicio 4
//comparar longitudes de nombres de ciudades
function CompararNombresCiudades() {
  let cantidadCiudades = parseInt(prompt("¿Cuántas ciudades desea comparar?"));
  let nombresCiudades = [];
  for (let i = 0; i < cantidadCiudades; i++) {
    let nombreCiudad = prompt("Ingrese el nombre de la ciudad " + (i + 1) + ":");
    nombresCiudades.push(nombreCiudad);
  }

  let ciudadMasLarga = nombresCiudades[0];
  for (let i = 1; i < nombresCiudades.length; i++) {
    if (nombresCiudades[i].length > ciudadMasLarga.length) {
      ciudadMasLarga = nombresCiudades[i];
    }
  }

  alert("La ciudad más larga es: " + ciudadMasLarga);
}
//Ejercicio 5
//obtener iniciales de varios cargos profesionales
function ObtenerInicialesCargos() {
  let n=parseInt(prompt("¿Cuántos cargos profesionales desea ingresar?"));
  let cargos=[];
  for(let i=0;i<n;i++){
    let cargo=prompt("Ingrese el cargo profesional "+(i+1)+":");
    cargos.push(cargo);
  }
  for(let i=0;i<cargos.length;i++){
    let textos=cargos[i];
    let iniciales="";
    iniciales+=textos[0] +".";
    for(let j=0;j<textos.length;j++){
      if(textos[j]===" " && textos[j+1]!=" "&& textos[j+1]!==undefined){
        iniciales+=textos[j+1]+".";
      }
    }
    alert("Las iniciales del cargo profesional "+(i+1)+" son: "+iniciales);
  }
}
ObtenerInicialesCargos();
//bloque3
//Ejercicio 1
//Dadas n calificaciones de estudiantes, calcular el promedio solo de aquellas que sean mayores o iguales a 70
function CalificacionesPromedio (){
let n= parseInt(prompt("ingrese el numero de calificaciones: "));
let calificaciones= []
 for(let i=0;i<n;i++){
    let nota= parseInt(prompt("ingrese las calificaciones: "))
    calificaciones.push(nota)
 }
  let suma=0;
  let contador=0;
  for(let i=0;i<calificaciones.length;i++){
    if(calificaciones[i]>=70){
      suma+=calificaciones[i];
      contador++;
    }
  }
  if(contador>0){
    let promedio=suma/contador;
    alert("El promedio de las calificaciones mayores o iguales a 70 es: "+promedio);
  }else{
    alert("No hay calificaciones mayores o iguales a 70");
  }
}
//Ejercicio 2
//ingresar n numeros y contar cuantos son negativos
function ContarNumerosNegativos() {
  let n= parseInt(prompt("ingrese la cantidad de numeros: "));
  let numeros=[]
   for(let i=0;i<n;i++){
  let numero= parseInt(prompt("ingrese los numeros: "))
      numeros.push(numero)
   }
   let suma=0;
   let c=0
  for(let i=0;i<numeros.length;i++){
     if(numeros[i]<0){
      c++;
    }   
 }
 alert("hay"+  c  +"numeros negativos")
}
//ejercicio 3
// dadas las edades de un grupo de personas, obtener el promedio de los mayores de edad y de los menores de edad
function PromedioEdadesMayoresMenores() {
  let n = parseInt(prompt("Ingrese el número de edades: "));
  let edades = [];
  for (let i = 0; i < n; i++) {
    let edad = parseInt(prompt("Ingrese las edades: "));
    edades.push(edad);
  }
  let sumaMayores = 0;
  let sumaMenores = 0;
  let countMayores = 0;
  let countMenores = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      sumaMayores += edades[i];
      countMayores++;
    } else {
      sumaMenores += edades[i];
      countMenores++;
    }
  }
  if (countMayores > 0) {
    let promedioMayores = sumaMayores / countMayores;
    alert("El promedio de los mayores de edad es: " + promedioMayores);
  } else {
    alert("No hay mayores de edad.");
  }
  if (countMenores > 0) {
    let promedioMenores = sumaMenores / countMenores;
    alert("El promedio de los menores de edad es: " + promedioMenores);
  } else {
    alert("No hay menores de edad.");
  }
}
//Ejercicio 4
//Dado un solo numero mostrar su tabla de multiplicar del 1 al 10
function TablaMultiplicar() {
  let numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + " x " + i + " = " + resultado);
  }
}
//Ejercicio 5
//ingresar n numeros y calcular el promedio de los numros pares y de los impares por separado
function PromedioParesImpares() {
  let n = parseInt(prompt("Ingrese la cantidad de números: "));
  let sumaPares = 0;
  let sumaImpares = 0;
  let countPares = 0;
  let countImpares = 0;
  for (let i = 0; i < n; i++) {
    let numero = parseInt(prompt("Ingrese un número: "));
    if (numero % 2 === 0) {
      sumaPares += numero;
      countPares++;
    } else {
      sumaImpares += numero;
      countImpares++;
    }
  }
  if (countPares > 0) {
    let promedioPares = sumaPares / countPares;
    alert("El promedio de los números pares es: " + promedioPares);
  } else {
    alert("No se ingresaron números pares.");
  }
  if (countImpares > 0) {
    let promedioImpares = sumaImpares / countImpares;
    alert("El promedio de los números impares es: " + promedioImpares);
  } else {
    alert("No se ingresaron números impares.");
  }
}
// bloque4
//Ejercicio 1
//Dada una lista de calificaciones, calcular el promedio solo de aquellas que sean mayores o iguales a 70 sin n
function promedioMayorA70() {
    let calificaciones = [65, 80, 90, 50,75];
    let suma = 0;
    let contador = 0;
    for ( let c = 0; c < calificaciones.length; c++) {
        if (calificaciones[c] >= 70) {
            suma = suma + calificaciones[c];
            contador++;
        }
    }
    let promedio = suma / contador;
    console.log("El promedio de calificaciones >= 70 es: " + promedio);
}
//Ejercicio 2
function contarNegativos() {
    let numeros = [3, -5, 0, 7, -1, -8];
    let contador = 0;
    for (let c=0 ; c < numeros.length; c++) {
        if (numeros[c] < 0) {
            contador++;
        }
    }
    console.log("Cantidad de numeros negativos: " + contador);
}
//Ejercicio 3
function promedioEdades() {
    let edades = [17, 20, 35, 15, 18];
    let sumaMayores = 0;
    let sumaMenores = 0;
    let contadorMayores = 0;
    let contadorMenores = 0;
    for (let c=0; c < edades.length; c++) {
        if (edades[c] >= 18) {
            sumaMayores = sumaMayores + edades[c];
            contadorMayores++;
        } else {
            sumaMenores = sumaMenores + edades[c];
            contadorMenores++;
        }
    }
    let promedioMayores = sumaMayores / contadorMayores;
    let promedioMenores = sumaMenores / contadorMenores;
    console.log("Promedio de mayores de edad: " + promedioMayores);
    console.log("Promedio de menores de edad: " + promedioMenores);
}
//Ejercicio 4
function mostrarTablasMultiplicar() {
    let numeros = [3, 5];
    for (let c = 0; c < numeros.length; c++) {
        console.log("Tabla del " + numeros[c] + ":");
        for (let i = 1; i <= 10; i++) {
            let resultado = numeros[c] * i;
            console.log(numeros[c] + " x " + i + " = " + resultado);
        }
    }
}
//Ejercicio 5
function promedioParesImpares() {
    let numeros = [2, 5, 8, 9, 4, 7];
    let sumaPares = 0, sumaImpares = 0;
    let contadorPares = 0, contadorImpares = 0;
    for (let c = 0; c < numeros.length; c++) {
        if (numeros[c] % 2 === 0) {
            sumaPares = sumaPares + numeros[c];
            contadorPares++;
        } else {
            sumaImpares = sumaImpares + numeros[c];
            contadorImpares++;
        }
    }
    let promedioPares = sumaPares / contadorPares;
    let promedioImpares = sumaImpares / contadorImpares;
    console.log("Promedio de pares: " + promedioPares);
    console.log("Promedio de impares: " + promedioImpares);
}