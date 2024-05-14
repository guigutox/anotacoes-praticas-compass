/*let mostrarSite = true;
const site = "www.exemplo.com"; 

console.log("Hello World");
console.log("Meu nome é Guilherme!");

if(mostrarSite){
    console.log(site);
}*/


function soma(a,b){
    return a + b;
}

function mult(a,b){
    return a * b;
}

function sub(a,b){
    return a - b;
}

function div(a,b){
    return a / b;
}

console.log(soma(1,2));

module.exports = soma;

module.exports = {

    mult,
    sub,
    div
}

