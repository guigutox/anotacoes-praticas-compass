## Instanciando servidor http com node web 3.js

Pré-requisitos

1. NodeJS e o Node Package Manager (npm) instalados
2. Terminal aberto (PowerShell no Windows)
3. Diretório vazio
4. Ganache instalado (ou qualquer outro nó de blockchain)

- npm init -y;
- npm install –save web3
- Comandos para importar web3:

```jsx
const { Web3 } = require("web3");
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.getBalance("YOUR METAMASK ACCOUNT").then(console.log);
```

Exemplo de transação:

```jsx
web3.eth.sendTransaction({
  from: "0xD1229974DC983a2636f3F2473D0eC370C2989A87",
  to: "0xc945f0b54a711c53197E906DFB928De0995992C5",
  value: web3.utils.toWei(1, "ether"),
});
```

---

## Usando web3.js para interação de contratos:

[S05L03+-+Using+Web3Js+to+Interact+with+Smart+Contracts.pdf](/images/S05L03+-+Using+Web3Js+to+Interact+with+Smart+Contracts.pdf)
