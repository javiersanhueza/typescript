function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

// Tipo Booleano
let flag: boolean;
let yes = true;
let no = false;

// Tipos numéricos y BigInterger
let w: number;
let g = 0;
let z: number = 123.456;
let big: bigint = 100n;

// Tipo de cadena
let s: string;
let empty = '';
let abc = 'abc';

let firstNameL: string = 'Theo';
let sentence: string = `My name is ${firstNameL}.
    I am new to TypeScript.`;
console.log(sentence);

// Tipo de enumeración
enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

// Tipos any
let randomValue: any = 10;
randomValue = 'Theo';
randomValue = true;
// console.log(randomValue.name);  // Logs "undefined" to the console
// randomValue();                  // Returns "randomValue is not a function" error
// randomValue.toUpperCase();      // Returns "randomValue is not a function" error

// Tipo unknown
let randomValue2: unknown = 10;
randomValue2 = true;
randomValue2 = 'Theo';

// console.log(randomValue2.name); // Error: Object is of type unknown
// randomValue2();                 // Error: Object is of type unknown
// randomValue2.toUpperCase()      // Error: Object is of type unknown

// Aserción de tipos
(randomValue2 as string).toUpperCase();
(<string>randomValue2).toUpperCase();

let randomValue3: unknown = 10;
randomValue3 = true;
randomValue3 = 'Theo';

/* Restricción de tipo */
/* if (typeof randomValue3 === 'string') {
  console.log((randomValue as string).toUpperCase()); // Retorna THEO en la consola.
} else {
  console.log('Error - A string was expected here.'); // Retorna un mensaje de error.
} */

// Tipos de unión
let multiType: number | boolean;
multiType = 20;
multiType = true;
// multiType = 'hola' // inválido

function add(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  if (typeof x === 'string' && typeof y === 'string') {
    return x.concat(y);
  }
  throw new Error('Parámetros tienen que ser números o string')
}

console.log(add('one', 'two'));  //* Retorna "onetwo"
console.log(add(1, 2));          //* Retorna 3
// console.log(add('one', 2));      //* Retorna error

// Tipos de intersección
interface Employee {
  employeeID: number;
  age: number
}
interface Manager {
  stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;
let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true
}

// Tipos literales (string y number)
type testResult = 'pass' | 'fail' | 'incomplete';
let myResult: testResult;
myResult = 'incomplete';
myResult = 'pass';
// myResult = 'failure'; inválido

// Tipo matrices
let list: number[] = [1, 2, 3];
let list2: (string|number)[] = [1, 2, 3, 'hola'];
let list3: Array<number> = [1, 2, 3];
let list4: Array<number|string> = [1, 2, 3, 'hola'];

// Tipo tupla
let person1: [string, number] = ['Theo', 0];
