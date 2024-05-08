let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1) {
  console.log(num2);
} else {
  console.log("Números são iguais");
}

let resp = num1 > num2 ? num1 : num2;
console.log(resp);
