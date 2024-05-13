///////////////// Function declaration vs expression

//Function declaration
function walk(){
    console.log('walk');
};

//Function expression
let run = function(){
    console.log('run');
}

//anonymous function
let run2 = function(){ 
    console.log('run');
}

let move = run ;
run;
move;

///////////////// Arguments

function sum(a, b){
    console.log(arguments);
    return a+b;
}

console.log(sum(1,2));


///////////////// Rest operator

function sumAll(...numbers){
    return numbers.reduce((a,b) => a+b);
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

///////////////// Default parameters

function interest(principal, rate = 4.5, years = 2){
    return principal * rate / 100 * years;
}

/////////////////// getters and setters

const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }   
}

person.fullName = 'Guilherme Santos';

console.log(person.fullName);


/////////////////// try and catch

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        if(typeof value !== 'string'){
            throw new Error('Value is not a string');
        }
    }   
}

try{
    person1.fullName = 'Guilherme Santos';
}catch(error){
    console.log(error);
    alert(error.message);
}

console.log(person1.fullName);