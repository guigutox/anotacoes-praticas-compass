//////////////// Operadores aritiméticos
let x = 10;
let y = 20;

console.log(x + y); //soma
console.log(x - y); //subtração
console.log(x * y); //multiplicação
console.log(x / y); //divisão
console.log(x % y); //resto
console.log(x ** y); //potência

///////////////// Incremento (++)
console.log(++x); //incremento antes de mostrar;
console.log(x++); //incremento depois de mostrar;

//////////////// Decremento (--)
console.log(--y); //decremento antes de mostrar;
console.log(y--); //decremento depois de mostrar;

//////////////// Operadores de atribuição
x += y; //x = x + y
x -= y; //x = x - y

///////////////// Operadores de comparação

console.log(x > y); //maior que
console.log(x < y); //menor que
console.log(x >= y); //maior ou igual
console.log(x <= y); //menor ou igual

////////////////// Operadores de igualdade
console.log(1 === 1); //igualdade estrita (mesmo tipo  e mesmo valor)
console.log(1 == 1); //igualdade laxa (checka se os valores sao iguais)

////////////////// Operadores ternarios

let pointas = 110;
let type = points > 100 ? "gold" : "silver"; //Verifica se a operação vai retornar true, se retornar true ele cairá condição do ? se for falso cai na condição dos :
console.log(type);

////////////////// Operadores logicos não booleanos
//Logico AND (&&) = retorna true se ambos forem verdadeiro

// Logico OR (||) = retorna true se um dos dois for verdadeiro

// Logico NOT (!) = inverte o valor
