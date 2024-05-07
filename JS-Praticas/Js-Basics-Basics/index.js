//////////////// Váriavel
let name = 'Guilherme';
console.log(name);

///////////////// Constante

const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

///////////////// Tipos primitivos

let lastname = 'Santos'; //String
let age = 30; //Number
let isApproved = true;  //Boolean
let middleName = undefined; //Undefined
let dogName = null; //Null

//////////////// Tipos de referência
//Object
let person = {
    name: 'Guilherme',
    age: 30
};

//Dot notation
person.name = 'Guilherme Santos';

//Bracket notation
person['name'] = 'Guilherme Santos Silva';

//Array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors[1]);
console.log(selectedColors.length);


//////////////////////////// FUNCOES
function greet(name, lastname){
    console.log('Hello ' + name + "" + lastname);
}

greet('Guilherme', 'Santos');


///////////////////////////// Type of function
function square(number){
    return number * number;
}

let result = square(2);
console.log(result);
console.log(square(3));