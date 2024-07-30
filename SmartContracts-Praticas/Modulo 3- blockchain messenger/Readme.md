## Anotações Módulo 3


-  Os exercícios deste repositório, são relacionados às praticas realizadas no curso de smart contracts da udemy do módulo 2;
-  Para o devido teste e funcionamento entre no site: http://remix.ethereum.org/
-  Altere o compilador para a versão 0.8.1
-  Crie um novo contrato e copie e cole o código a ser testado


### Tipos:

- bool = booleano, inicia com valor false, não é possível usar 0 e 1, apenas true ou false;
- int (integer) = negativo ou positivo vai até -2^128 ou +2^128;
- uintX(unsigned int) = apenas positivos, X define a potência de 2 a qual o numero vai, exemplo uint8 = 2^8-1;
- String = declaração normal de string;
- Adress = endereços podem ser armazenados em smart contracts podem ser usados para transferior ether do contrato inteligiente para um endereço armazenado em uma variável.

### Variáveis

- notação public é necessária para que o solidity crie um getter automaticamente no contrato, caso contrário não será possível visualizar no contrato a variável;
- Podem ser usados operadores lógicos como ! (negação), && (conjunção), || (OU);
- Comparação de STRING:
    
    ```jsx
        function compareTwoStrings(string memory _myString) public view returns(bool) {
            return keccak256(abi.encodePacked(myString)) == keccak256(abi.encodePacked(_myString));
        }
    ```
    
- Tamanho de string:
    
    ```jsx
    bytes public myBytes = "palavra"
    function getBytesLength() public view returns(uint) {
            return myBytes.length;
    }
    ```
    

### Detalhes tipo adress:

- O contrato inteligente é armazenado no próprio endereço;
- O contrato inteligente pode armazenar um endereço na variável “someAddress”, podendo ser o seu próprio endereço ou qualquer outro endereço;
- Todas as informações do blockchain são publicas, então podemos recuperar o saldo do endereço armazenado na variável “someAdress”;
- O contrato inteligente pode transferir fundos do seu próprio endereço para outro endereço, mas não pode transferir os fundos de outro endereço.

### Message sender:

- Ao utilizar este método, ele armazena o endereço de quem realizou a chamada do smart contract, o imediatamente anterior.

### Escrevendo, View e Pure functions:

- Interagir e modificar state variables, as quais foram as mais utilizadas até o momento requer custo em gas e mineração, além de não retornar nenhum valor.
- Ler valores, por outro lado é virtualmente gratis e não requer mineração.
- Logo, existem dois tipos de funções de leitura:
    - view: Acessa state variables;
    - pure: Não acessa state variables;

ESCRITA:

```jsx
contract ExampleViewPure {

    uint public myStorageVariable;

    function setMyStorageVariable(uint _newVar) public returns(uint) {
        myStorageVariable = _newVar;
        return _newVar;
    }

}
```

Visualização:

```jsx
    function getMyStorageVariable() public view returns(uint) {
        return myStorageVariable;
    }
```

FUNÇÃO PURA:

Não lê e nem escreve variáveis de estado, podendo acessar apenas seus próprios argumentos e outras funções puras.

```jsx
    function getAddition(uint a, uint b) public pure returns(uint) {
        return a+b;
    }
```

### Constructor:

- É uma função especial, que é chamada automaticamente durante o deploy do smart contract, não podendo ser chamada novamente depois;

```jsx
//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

contract ExampleConstructor {

    address public myAddress;

    constructor(address _someAddress) {
        myAddress = _someAddress;
    }

    function setMyAddress(address _myAddress) public {
        myAddress = _myAddress;
    }
    function setMyAddressToMsgSender() public {
        myAddress = msg.sender;
    }

}
```

- Ele pode ter argumentos como mostrado, porém também possui os mesmos objetos disponiveis em qualquer outra transação, logo, o msg.sender é o endereço da pessoa que implantou o contrato inteligente, que você pode usar;