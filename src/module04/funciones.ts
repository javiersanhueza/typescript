// Funciones con nombre
function addNumbers(x: number, y: number): number {
  return x +  y;
}
addNumbers(1, 2);

// Funciones anónimas
let addNumbers2 = function (x: number, y: number): number {
  return x + y;
}
addNumbers2(1, 2);

// Funciones de flecha
let addNumber3 = (x: number, y: number): number => x + y;


// Ejercicios: Creación de funciones
function displayAlert(message: string) {
  alert(`The message is ${message}`);
}
displayAlert('Hola mundo');

function sum(input: number[]): number {
  let total: number = 0;
  for(let count: number = 0; count < input.length; count++) {
    if (isNaN(input[count])) {
      continue;
    }
    total += Number(input[count]);
  }
  return total;
}
sum([6]);

// Pruebas con parámetros
// Parámetros obligatorios
function addNumber4(x: number, y: number): number {
  return x + y;
}

// Parámetros opcionales
function addNumber5(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}
addNumber5(1, 2);
addNumber5(1);

// Parámetros predeterminados
function addNumber6(x: number, y: number = 25): number {
  return x + y;
}

// Parámetros de REST (número sin límite de parámetros opcionales)

let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number = firstNumber;
  for (let counter: number = 0; counter < restOfNumbers.length; counter++) {
    if(isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
}
addAllNumbers(1, 2, 3, 4, 5, 6, 7);
addAllNumbers(2);
addAllNumbers(2, 3);

// Parámetros de objeto desconstruido
interface Message {
  text: string;
  sender: string
}

function displayMessage2({text, sender}: Message) {
  console.log(`Message from ${sender}: ${text}`);
}
displayMessage2({sender: 'Theo', text: 'Hola mundo'});

// Ejercicios: pruebas con parámetros
// Parámetros opcionales
let addThreeNumbers = (x: number, y: number, z?: number): number => {
  if (z === undefined) {
    return x + y;
  }
  return x + y + z;
}
addThreeNumbers(10, 20, 30);

// Parámetros predeterminados
let subtractThreeNumbers = (x: number, y: number, z: number = 100): number => x - y - z;
subtractThreeNumbers(10, 20);
subtractThreeNumbers(10, 20, 15);

// Ejercicios: definición de tipos de funciones
// type calculator = (x: number, y: number) => number;
interface calculator {
  (x: number, y: number): number;
}
let addNumbers6: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;
console.log(addNumbers6(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation === 'add') {
    return addNumbers6;
  } else {
    return subtractNumbers;
  }
}
console.log(doCalculation('add')(1,2));

// Inferencia de tipos de funciones
let addNumbers7: calculator = (x: number, y: number): number => x + y;
let addNumbers8: calculator = (number1: number, number2: number): number => number1 + number2;
let addNumbers9: calculator = (num1, num2) => num1 + num2;
