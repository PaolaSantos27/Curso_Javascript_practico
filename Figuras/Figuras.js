// Código del Cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
   return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
 }
console.groupEnd

// Código del Triángulo
console.group("Triángulos")

function perimetroTriangulo (lado1, lado2, base) {
   return lado1 + lado2 + base;
}


function areaTriangulo (base, altura){
   return (base * altura) / 2;
} 


console.groupEnd();

// Código del Círculo
console.group("Círculo")



// Diametro
function diametroCirculo(radio){
   return radio *2;
} 


// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia

function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * PI;
}


// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();


//Aqui interactuamos con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const perimetro = perimetroCuadrado(value);
  alert('El perimetro es: ' + perimetro + 'cm');
}

function calcularAreaCuadrado() {
   const input = document.getElementById("InputCuadrado");
  const value = input.value;
  
  const area = areaCuadrado(value);
  alert('El area es: ' + area + 'cm');
}

//Triangulo

function calcularPerimetroTriangulo() {
   const inputLado1 = document.getElementById('inputTriangulo1');
   const inputLado2 = document.getElementById('inputTriangulo2');
   const inputBase = document.getElementById('inputTriangulo3');
   const valueLado1 = Number(inputLado1.value);
   const valueLado2 = Number(inputLado2.value);
   const valueBase = Number(inputBase.value);

   const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);

   alert('El perimetro es: ' + perimetro + 'cm');
}

function calcularAreaTriangulo() {
   const inputBase = document.getElementById('inputTriangulo3');
   const inputAltura = document.getElementById('inputTriangulo4');
   const valueBase = inputBase.value;
   const valueAltura = inputAltura.value;
   const area = areaTriangulo(valueBase, valueAltura);

   alert('El área es: ' + area + 'cm^2');
}

//Circulo

function calcularPerimetroCirculo() {
   const input = document.getElementById('inputCirculo');
   const value = input.value;
   const perimetro = perimetroCirculo(value);

   alert('El perimetro es: ' + perimetro + 'cm');
}

function calcularAreaCirculo() {
   const input = document.getElementById('inputCirculo');
   const value = input.value;
   const area = areaCirculo(value);

   alert('El área es: ' + area + 'cm^2');
}

//Triangulo Isosceles

function alturaTriangulo (lado1, lado2, lado3) {
   if (lado1 == lado2 && lado1 != lado3) {

       const media = (lado3 / 2);
       altura = Math.sqrt((lado1 * lado1) - (media * media));

       if (lado1 + lado2 > lado3) console.log(altura);
       else console.log('No es un triángulo');

   } else if (lado1 == lado3 && lado1 != lado2) {

       const media = (lado2 / 2);
       altura = Math.sqrt((lado1 * lado1) - (media * media));

       if (lado1 + lado3 > lado2) console.log(altura);
       else console.log('No es un triángulo');

   } else if (lado2 == lado3 && lado2 != lado1) {

       const media = (lado2 / 2);
       altura = Math.sqrt((lado1 * lado1) - (media * media));
       
       if (lado2 + lado3 > lado1) console.log(altura);
       else console.log('No es un triángulo');

   } else {
       console.log('No es un triángulo isósceles');
   }
}

alturaTriangulo(8, 8, 10); //6.244997998398398