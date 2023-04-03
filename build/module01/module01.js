"use strict";
function addNumbers(x, y) {
    return x + y;
}
console.log(addNumbers(3, 6));
let flag;
let yes = true;
let no = false;
let w;
let g = 0;
let z = 123.456;
let s;
let empty = '';
let abc = 'abc';
let firstNameL = 'Theo';
let sentence = `My name is ${firstNameL}.
    I am new to TypeScript.`;
console.log(sentence);
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
let randomValue = 10;
randomValue = 'Theo';
randomValue = true;
let randomValue2 = 10;
randomValue2 = true;
randomValue2 = 'Theo';
randomValue2.toUpperCase();
randomValue2.toUpperCase();
let randomValue3 = 10;
randomValue3 = true;
randomValue3 = 'Theo';
let multiType;
multiType = 20;
multiType = true;
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parámetros tienen que ser números o string');
}
console.log(add('one', 'two'));
console.log(add(1, 2));
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
let myResult;
myResult = 'incomplete';
myResult = 'pass';
let list = [1, 2, 3];
let list2 = [1, 2, 3, 'hola'];
let list3 = [1, 2, 3];
let list4 = [1, 2, 3, 'hola'];
let person1 = ['Theo', 0];
//# sourceMappingURL=module01.js.map