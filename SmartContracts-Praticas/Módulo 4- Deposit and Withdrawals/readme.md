## Anotações Módulo 4

### Injetar provedor web 3:

Exemplo de código:

```jsx
//SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

contract SampleContract {
    string public myString = "Hello World";

    function updateString(string memory _newString) public {
        myString = _newString;
    }
}
```

Adicionar o contrato ao remix e em enviroment selecione: injected web3;

Conecte ao metamask:

![Untitled](/images/img1.png)

Depois de clicar em "Implantar" na guia Implantar e executar transação, o MetaMask aparecerá e solicitará que você confirme a transação antes de enviá-la para a rede :

![Untitled](/images/img2.png)

---

### THE PAYABLE MODIFIER AND MSG.VALUE

### Modificador PAYABLE:

- Adicionar esse modificador indica que a função pode realizar transferência de recurso, exemplo pode carregar no campo value: 1 eth.

EXEMPLO:

```jsx
//SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

contract SampleContract {
    string public myString = "Hello World";

    function updateString(string memory _newString) public payable {
        myString = _newString;
    }
}
```

Essa função pode carregar uma moeda qualquer.

### Msg.value:

- Com ela é possível verificar o tipo e a quantidade de recurso que está vindo no value, assim podendo verificar se é o que está esperando, realmente:

```jsx
//SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

contract SampleContract {
    string public myString = "Hello World";

    function updateString(string memory _newString) public payable {
        if(msg.value == 1 ether) {
            myString = _newString;
        } else {
            payable(msg.sender).transfer(msg.value);
        }
    }
}
```

Essa função realiza a verificação se está vindo 1 ether, caso não esteja ele realiza a devolução a partir da linha payable(msg.sender).transfer(msg.value) com ela é possível devolver a  quantia.

---

### FALLBACK AND RECEIVE

### Receive:

A função `receive` é uma função especial que é chamada automaticamente quando o contrato recebe ether e não há dados na chamada. A função `receive` é opcional e deve ser marcada como `external` e `payable`. No exemplo do contrato `SampleFallback`, a função `receive` atualiza as variáveis `lastValueSent` e `lastFunctionCalled` para registrar a quantidade de ether recebida e o nome da função chamada.

```jsx
uint public lastValueSent;
string public lastFunctionCalled;
	receive() external payable {
	    lastValueSent = msg.value;
	    lastFunctionCalled = "receive";
	}

```

### Função fallback

A função `fallback` é outra função especial que é chamada quando:

1. Uma chamada para o contrato não corresponde a nenhuma função existente.
2. O contrato é chamado sem dados, mas a função `receive` não está presente.
3. A função `receive` não está marcada como `payable` e o contrato recebe ether.

A função `fallback` também deve ser marcada como `external` e pode ser `payable` se o contrato precisar aceitar ether. No exemplo do contrato `SampleFallback`, a função `fallback` atualiza as variáveis `lastValueSent` e `lastFunctionCalled` para registrar a quantidade de ether recebida e o nome da função chamada.

```jsx
fallback() external payable {
    lastValueSent = msg.value;
    lastFunctionCalled = "fallback";
}
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2830c040-a0c1-4902-8558-fdb91bfd042a/c4a10cd6-df5b-430c-b9ac-dd84c324b901/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2830c040-a0c1-4902-8558-fdb91bfd042a/31266301-29eb-44e8-9b10-2ed9f229b501/Untitled.png)