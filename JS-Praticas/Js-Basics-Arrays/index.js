///////////////// Adding elements

const numbers = [3,4];

//END
numbers.push(5);

//START
numbers.unshift(2);

//MIDDLE
numbers.splice(2, 0, 6);


///////////////// Finding elements

console.log(numbers.indexOf('1'));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1) !== -1);
console.log(numbers.includes(1));


///////////////// Arrow functions

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
]

const course = courses.find(course =>{
    return course.id === 1;
});

///////////////// Removing elements

//END
numbers.pop()

//START
numbers.unshift()

//Middle
numbers.splice()


////////////////// Emptying an array

let anotherr = numbers;
//solution 1
numbers = [];

//solution 2
numbers.length = 0;

//solution 3
numbers.splice(0, numbers.length);

//solution 4
while(numbers.length > 0){
    numbers.pop();
}

////////////////// Combining and slicing arrays

const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(0, 2); //start, end pega os elementos desses indices

////////////////// The spread operator

const combined2 = [...first, 'a', ...second, 'b'];

////////////////// Interating an array

numbers.forEach(number => console.log(number));


////////////////// Sorting an array

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

////////////////// Testing an array

number = [1,2,3,4,5];

//TODOS
const allPositive = number.every(number => number > 0);

//ALGUM
const anyNegative = number.some(number => number < 0);

////////////////// Filtering an array

numbers = [1,2,3,4,5,6,7,8,9,10];

const filtered = numbers.filter(number => number > 5);


///////////////// Mapping an array

const numbers = [1, -1, 2, -2, 3, -3];

filtered = numbers.filter(number => number > 0).map(number => number * 2);

const items = filtered.map(number => number * 2);

console.log(items);

/////////////////// Reducing an array

const sum = numbers.reduce((total, number) => total + number, 0);
