
let n = 3;
fizzBuzz(n);

function fizzBuzz(n) {
  
  if (typeof n == "number") {
    if (n % 3 == 0 && n % 5 == 0) {
      console.log("FizzBuzz");
    } else if (n % 3 == 0) {
      console.log("Fizz");
    } else if (n % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(n);
    }
  } else {
    console.log("Não é um número");
  }
}
