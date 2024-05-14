let http = require("http");

http.createServer(function(requisicao, resposta){

    resposta.end("<h1>Bem vindo ao servidor</h1>");
}).listen(8181);

console.log("Servidor rodando na porta 8181!");
