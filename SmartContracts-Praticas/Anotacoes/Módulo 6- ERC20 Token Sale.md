## WEB 3.js

Web3.js é uma biblioteca JavaScript que permite interagir com um nó blockchain por meio de sua interface RPC. Pode ser uma interface HTTP RESTful ou WebSockets.

Se olharmos mais de perto o Web3.js, você verá que existe um componente chamado web3-eth, que você pode acessar em `web3.eth`.  Existem funções JavaScript para interagir com um nó blockchain, por exemplo `web3.eth.getBalance(...)`.
Ao chamar esta função JavaScript, a biblioteca web3 iria falar com o 
nó Blockchain ao qual você está conectado e executaria uma chamada JSON 
RPC chamada 

### Exemplo de interação:

No Remix, através da linha de comando (ou terminal?!) você pode interagir diretamente com o web3js.

```jsx
web3.eth.getAccounts() 
```

Fornecerá uma lista de contas disponíveis.  Se você selecionou a VM 
Remix no menu suspenso de ambiente na guia Implantar e executar 
transação, ele fornecerá as contas que estão disponíveis no menu 
suspenso de contas.  Se você selecionou Injected Web3-Provider, 
provavelmente lhe dará a conta que está no MetaMask.

Vamos adicionar um novo script para gerar a primeira conta na lista de contas.

Adicione um novo arquivo chamado `get_accounts.js` com o seguinte conteúdo:

```jsx
(async () => {
    let accounts = await web3.eth.getAccounts();
    console.log("Accounts: ", accounts);

    console.log("Accounts 1:", accounts[0]);
})();
```

Isso executa uma função principal anônima, que usa a sintaxe async/await para trabalhar com promessas ( `web3.eth.getAccounts()`naverdade retorna uma promessa que precisa ser resolvida).  Em seguida, ele gera todas as contas e a conta nº 1 (que está no índice 0).  Se você
clicar com o botão direito no script e clicar em "executar", ele será executado e a saída ficará visível na área do console.

---

## EVENTS

Existe uma estrutura de dados especial no Ethereum para fornecer ao mundo exterior melhor acesso aos valores de retorno. Esse é o recurso de registro do Ethereum

Os eventos são uma forma de acessar esse recurso de registro. Esse recurso de registro oferece aos aplicativos externos uma maneira de assinar esses eventos por meio de métodos RPC especiais. ++

Normalmente, não há saída decodificada.   O envio de uma  *transação*  é uma operação simultânea que geralmente não possui valor de retorno.  Houve algumas discussões para realmente retornar algo, mas no momento em que escrevo estas linhas,  *os eventos*  estão aqui para emitir valores de uma transação escrita. 

Exemplo de código com evento:

```jsx
//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract EventExample {

    mapping(address => uint) public tokenBalance;

    event TokensSent(address _from, address _to, uint _amount);

    constructor() {
        tokenBalance[msg.sender] = 100;
    }

    function sendToken(address _to, uint _amount) public returns(bool) {
        require(tokenBalance[msg.sender] >= _amount, "Not enough tokens");
        tokenBalance[msg.sender] -= _amount;
        tokenBalance[_to] += _amount;

        emit TokensSent(msg.sender, _to, _amount);

        return true;
    }
}
```

---

### Resumo sobre Eventos e Web3.js

### Indexação

- **Definição**: Processo de marcar parâmetros de eventos para permitir pesquisa e filtragem eficientes.
- **Uso**: Até três parâmetros podem ser indexados em cada evento.
- **Exemplo**: `event TokensSent(address indexed _from, address indexed _to, uint _amount);`

### Filtragem

- **Definição**: Processo de consultar eventos que atendem a critérios específicos.
- **Ferramenta**: Usado com Web3.js para recuperar eventos relevantes.
- **Exemplo de Código**:

```jsx
contractInstance.getPastEvents('TokensSent', {
    filter: { _to: '0x123123123...' },
    fromBlock: 0,
    toBlock: 'latest'
}).then(events => {
    console.log(events);
}).catch(err => {
    console.error(err);
});

```

### Benefícios

- **Eficiência**: Filtragem rápida de eventos indexados.
- **Redução de Dados**: Apenas eventos relevantes são recuperados.
- **Facilidade de Uso**: Construção de dApps responsivos e rápidos.

### Limitações

- **Número de Parâmetros Indexados**: Máximo de três parâmetros indexados por evento.
- **Filtragem por Intervalos**: Não permite filtragem por intervalos numéricos.
- **Acesso On-Chain**: Eventos são destinados ao consumo off-chain; contratos inteligentes não podem ler logs diretamente.

### Passos para Implementação

1. **Definir Eventos com Parâmetros Indexados**:

```solidity
event TokensSent(address indexed _from, address indexed _to, uint _amount);

```

1. **Reimplantar o Contrato Inteligente**.

2. **Usar Web3.js para Filtrar Eventos**:

```jsx

contractInstance.getPastEvents('TokensSent', {
    filter: { _to: '0x123123123...' },
    fromBlock: 0,
    toBlock: 'latest'
}).then(events => {
    console.log(events);
}).catch(err => {
    console.error(err);
});

```

---

## Modificadores e herança

### Resumo sobre Modificadores em Solidity

### Modificador `onlyOwner`

- **Definição**: Um modificador é uma estrutura que altera o comportamento de funções, adicionando verificações de condições antes de permitir a execução da função.
- **Uso**: Restringe o acesso a certas funções, permitindo que apenas o proprietário do contrato possa executá-las.
- **Sintaxe**:

```jsx
modifier onlyOwner() {
    require(msg.sender == owner, "You are not allowed");
    _;
}
```

- `require(msg.sender == owner, "You are not allowed");`: Verifica se o chamador da função é o proprietário do contrato. Se não for, lança um erro.
- `_`: Representa o corpo da função que está usando o modificador.

### Aplicação em Funções

- **`createNewToken`**:

```jsx
function createNewToken() public onlyOwner {
    tokenBalance[owner]++;
}
```

Permite que apenas o proprietário crie novos tokens.

- **`burnToken`**:

```jsx

function burnToken() public onlyOwner {
    tokenBalance[owner]--;
}

```

Permite que apenas o proprietário queime tokens.

### Benefícios dos Modificadores

- **Segurança**: Assegura que apenas entidades autorizadas podem executar determinadas funções.
- **Reutilização de Código**: Permite a reutilização de verificações de condições em várias funções, mantendo o código limpo e organizado.

---

## Reserved Keywords

ACESSAR:

https://ethereum-blockchain-developer.com/2022-05-erc20-token/08-reserved-keywords-ether-minute/

---

## Destruindo smart contracts com auto destruição

Os dados no blockchain são  *para sempre*  , mas o  **estado**  não.   Isso significa que não podemos apagar informações do Blockchain, mas podemos atualizar o  *estado atual*  para que você não possa mais interagir com um endereço  *daqui para frente*  .   Todos podem sempre voltar no tempo e verificar qual era o valor no dia X, mas, uma vez que a função `selfdestruct()` é chamado, você não poderá mais interagir com um Contrato Inteligente. 

```jsx
//SPDX-License-Identifier: MIT

pragma solidity 0.8.16;

contract StartStopUpdateExample {

    receive() external payable {}

    function destroySmartContract() public {
        selfdestruct(payable(msg.sender));
    }
}
```

Como é que `selfdestruct`trabalhar?  É uma função que 
recebe um argumento, um endereço, que recebe todos os fundos armazenados
 no endereço do contrato.  Em seguida, removerá o código do contrato do 
estado.  O endereço do contrato ficará vazio daqui para frente.

O contrato deve ser facilmente legível e a única surpresa será o que 
acontece quando você interage com o contrato inteligente após ele ter 
sido destruído.  Depois de ligar `destroySmartContract`, o 
endereço do Contrato Inteligente não conterá mais código.  Você ainda 
pode enviar transações para o endereço e transferir Ether para lá, mas 
não haverá nenhum código que possa enviar o Ether de volta.

---

### VERIFICAR MANUALMENTE UM CONTRATO NO ETHERSCAN:

https://ethereum-blockchain-developer.com/2022-05-erc20-token/10-block-explorers-source-code-verification/

---

### Explicações sobre ERC20 TOKEN

https://ethereum-blockchain-developer.com/2022-05-erc20-token/11-erc20-token-origin-openzeppelin/

---

### ERC20 token sale

https://ethereum-blockchain-developer.com/2022-05-erc20-token/12-erc20-tokensale-implementation/