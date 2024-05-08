//////////////// IF ELSE
let hour = 10;

if(hour >= 6 && hour < 12){
    console.log('Good morning');
}else if(hour >= 12 && hour < 18){
    console.log('Good afternoon');
}else{
    console.log('Good night');
}

//////////////// SWITCH

let role;

switch(role){
    case 'guest': 
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    default:
        console.log('Unknown user');
}


///////////////// FOR

for(let i = 0; i < 5; i++){
    console.log(i);
}

///////////////// WHILE

while(i < 5){
    console.log(i);
    i++;
}

////////////////// DO WHILE

do{
    if(i % 2 !== 0){
        console.log(i);
        i++;}
}while(i <= 5);

///////////////// FOR IN
const person ={
    name: 'Guilherme',
    age: 30
};

for(let key in person){
    console.log(key, person[key]);
}

// Dot Notation
person.name;

//Bracket notation
person['name'];


///////////////// FOR OF
const colors = ['red', 'green', 'blue'];

for(let color of colors)console.log(color);

////////////////// Break and Continue
while(i < 5){
    if(i === 2){
        break;
    }
    if(i === 3){
        i++;
        continue;
    }
    console.log(i);
    i++;
}
