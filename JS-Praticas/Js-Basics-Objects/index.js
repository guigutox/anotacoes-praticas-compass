const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    console.log("draw");
  },
};

console.log(circle.draw());

/////////////// Factory function

function createCircle(radius) {
  return {
    radius: radius,
    // draw: function(){
    //}
    draw() {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

///////////////// Constructor function
function Circle(radius) {
  this.Circle = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle3 = new Circle(1);
const x = {};

//////////////// Objetcs are functions

Circle.call({}, 1);
Circle.apply({}, [1]);

const circle5 = new Circle(1);

const another = new Circle(1);

//////////////// Enumerating properties
for (let key in circle) {
  console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) {
  console.log(key);
}

for (let entry of Object.entries(circle)) {
  console.log(entry);
}

if ("radius" in circle) {
  console.log("Yes");
}

//////////////////////////// Cloning objetc 

const anotherOne = {};

//for (let key in circle)
//  anotherOne[key] = circle[key];

const another3 = Objetc.assign(anotherOne, circle); //Copia um objeto para outro, copia tudo;

const anoter = { ...circle }; // Coloca todos os metodos e objstos dentro de outro

/////////////////////////////// String
const message = 'hi'; //String primitiva

new String ('hi'); // Objeto String

/////////////////////////////// Template literals
const msg = 'This is my \n '+'first message';

//Object {}
//Boolean true, false
//String '', ""
//Template ``

const another4 = `This is another message`;


///////////////// Date

const now = new Date();
const date1 = new Date(2018, 11, 24, 10, 33, 30, 0);
const date2 = new Date(2018, 11, 24);

