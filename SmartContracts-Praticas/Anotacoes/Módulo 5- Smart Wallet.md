### Mapping:

Em Solidity, a palavra-chave `mapping` é usada para definir um tipo de dado especial chamado "mapeamento". Um mapeamento é essencialmente uma estrutura de dados que associa chaves a valores, similar a um dicionário ou um mapa em outras linguagens de programação.

EXEMPLO:

- `mapping(uint => bool)` define um mapeamento onde as chaves são do tipo `uint` (inteiros sem sinal) e os valores são do tipo `bool` (booleanos).
- `mapping(address => bool)` define um mapeamento onde as chaves são do tipo `address` (endereços Ethereum) e os valores são do tipo `bool` (booleanos).

Exemplo código

```jsx
contract SimpleMappingExample {

    mapping(uint => bool) public myMapping;
    mapping(address => bool) public myAddressMapping;

    function setValue(uint _index) public {
        myMapping[_index] = true;
    }

    function setMyAddressToTrue() public {
        myAddressMapping[msg.sender] = true;
    }

}
```

---

### MAPPING WALLET

```jsx

contract ExampleMappingWithdrawals{

    mapping(address => uint) public balanceReceived;

    function sendMoney() public payable {
        balanceReceived[msg.sender] += msg.value;
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function withdrawAllMoney(address payable _to) public {
        uint balanceToSendOut = balanceReceived[msg.sender];
        balanceReceived[msg.sender] = 0;
        _to.transfer(balanceToSendOut);
    }
    
```

### Explicação das Funções

### `sendMoney`

- Qualquer pessoa pode chamar esta função e enviar Ether ao contrato.
- O valor enviado (`msg.value`) é adicionado ao saldo registrado no mapeamento `balanceReceived` para o endereço do remetente (`msg.sender`).

### `getBalance`

- Esta função retorna o saldo total de Ether armazenado no contrato (`address(this).balance`).

### `withdrawAllMoney`

- A função `withdrawAllMoney` permite que uma pessoa saque todo o dinheiro que enviou ao contrato.
- Ela aceita um parâmetro `_to` que especifica para qual endereço o Ether será enviado.
- A função verifica o saldo registrado no mapeamento `balanceReceived` para o endereço do remetente (`msg.sender`).
- Define o saldo do remetente no mapeamento como `0`.
- Transfere o valor registrado para o endereço `_to`.

### Quem Pode Sacar o Dinheiro?

- Somente o remetente que enviou dinheiro ao contrato pode sacar o valor correspondente ao que enviou.
- Quando alguém chama a função `withdrawAllMoney`, o contrato usa `msg.sender` para verificar o saldo registrado em `balanceReceived` e permite que apenas aquele remetente saque seu saldo.
- Se Alice enviou 1 Ether ao contrato, ela pode sacar exatamente 1 Ether.
- Se Bob enviou 2 Ethers, ele pode sacar exatamente 2 Ethers.

---

## STRUCT ON SOLIDITY

### Smart contract child

```jsx

contract PaymentReceived {
    address public from;
    uint public amount;

    constructor(address _from, uint _amount) {
        from = _from;
        amount = _amount;
    }
}

contract Wallet {
    PaymentReceived public payment;

    function payContract() public payable {
        payment = new PaymentReceived(msg.sender, msg.value);
    }
}
}
```

Se você implantar o contrato inteligente "Wallet" e enviar 1 wei para a função payContract (1) , ele consumirá 221.530 gás (2). Por que? Porque ele implanta um novo contrato "PaymentReceived" e depois o vincula. 

Uma instância de contrato, instancia a outra dando novos valores e utilizando do construtor para lhe passar os valores que haviam sido declarados no primeiro contrato.

### STRUCTS

As structs em contra partida vem a partir de um unico contrato, com ele é possível realizar a definição de uma estrutura de dado, no caso a estrutura é paymentReceivedStruct e com ela é possível instanciar uma variavel do seu tipo, no caso uma variavel do tipo paymentReceivedStruct.

```jsx
contract Wallet2 {
    struct PaymentReceivedStruct {
        address from;
        uint amount;
    }

    PaymentReceivedStruct public payment;

    function payContract() public payable {
        payment = PaymentReceivedStruct(msg.sender, msg.value);
    }
}
```

---

### Detalhando STRUCTS

```jsx
// SPDX-License-Identifier: MIT

pragma solidity 0.8.26;

contract MappingsStructExample {

    struct Transaction {
        uint amount;
        uint timestamp;
    }

    struct Balance {
        uint totalBalance;
        uint numDeposits;
        mapping(uint => Transaction) deposits;
        uint numWithdrawals;
        mapping(uint => Transaction) withdrawals;
    }

    mapping(address => Balance) public balanceReceived;

    function getBalance(address _addr) public view returns(uint) {
        return balanceReceived[_addr].totalBalance;
    }

    function depositMoney() public payable {
        balanceReceived[msg.sender].totalBalance += msg.value;

        Transaction memory deposit = Transaction(msg.value, block.timestamp);
        balanceReceived[msg.sender].deposits[balanceReceived[msg.sender].numDeposits] = deposit;
        balanceReceived[msg.sender].numDeposits++;
    }

    function withdrawMoney(address payable _to, uint _amount) public payable  {
        balanceReceived[msg.sender].totalBalance -= _amount; //reduce the balance by the amount ot withdraw

        //record a new withdrawal
        Transaction memory withdrawal = Transaction(msg.value, block.timestamp);
        balanceReceived[msg.sender].withdrawals[balanceReceived[msg.sender].numWithdrawals] = withdrawal;
        balanceReceived[msg.sender].numWithdrawals++;

        //send the amount out.
        _to.transfer(_amount);
    }
}
```

---

### REQUIRE:

É uma validação de entrada do usuário, se for validada como falso, lançará um exceção.

Uma require(false) ou require(1==0) lançará uma exceção. É possível também adicionar uma mensagem de erro ao require, exemplo:  

```jsx
require(false,"Some Error Message")
```

---

## Assert  para checar invariantes

- Assert é usado para verificar invariantes. Esses são os estados que o contrato ou variáveis nunca deveriam atingir, jamais. Por exemplo, se o valor for reduzido, ele nunca deverá aumentar, apenas diminuir.

```jsx
contract ExceptionExample {

    mapping(address => uint8) public balanceReceived;

    function receiveMoney() public payable {
        assert(msg.value == uint8(msg.value));
        balanceReceived[msg.sender] += uint8(msg.value);
        assert(balanceReceived[msg.sender] >= uint8(msg.value));
    }

    function withdrawMoney(address payable _to, uint8 _amount) public {
        require(_amount <= balanceReceived[msg.sender], "Not Enough Funds, aborting");
        assert(balanceReceived[msg.sender] >= balanceReceived[msg.sender] - _amount);
        balanceReceived[msg.sender] -= _amount;
        _to.transfer(_amount);
    }
}
```

Aqui está a finalidade de cada `assert`:

1. `assert(msg.value == uint8(msg.value));`:
    - Verifica se o valor recebido (`msg.value`) pode ser convertido para `uint8` sem perda de dados. Se `msg.value` for maior que `uint8` pode armazenar (ou seja, maior que 255), a conversão falhará e o `assert` disparará, revertendo a transação.
2. `assert(balanceReceived[msg.sender] >= uint8(msg.value));`:
    - Após adicionar o valor recebido ao saldo do remetente (`balanceReceived[msg.sender]`), verifica se o novo saldo é pelo menos igual ao valor recebido. Isso é uma verificação de integridade para garantir que a adição não resultou em um valor incorreto.
3. `assert(balanceReceived[msg.sender] >= balanceReceived[msg.sender] - _amount);`:
    - Antes de deduzir o valor a ser retirado do saldo do remetente, verifica se o saldo atual é suficiente para cobrir a dedução. No entanto, essa condição é redundante, pois a linha anterior com `require` já garante que `_amount` não excede `balanceReceived[msg.sender]`.

---

## Try/catch

Há um novo conceito no Solidity desde o Solidity 0.6, que permite try/catch básico dentro de um Contrato Inteligente. Antes disso, você tinha que usar construções como address.call (o que faremos mais tarde no curso). Mas aqui quero dar uma dica rápida do que é possível agora com o tratamento de erros. 

```jsx

contract WillThrow {
    function aFunction() public pure {
        require(false, "Error message");
    }
}

contract ErrorHandling {
    event ErrorLogging(string reason);
    function catchError() public {
        WillThrow will = new WillThrow();
        try will.aFunction() {
            //here we could do something if it works
        }  catch Error(string memory reason) {
            emit ErrorLogging(reason);
        }
    }
}
```

- Dentro da função `catchError`, uma instância do contrato `WillThrow` é criada.
- A função `aFunction` do contrato `WillThrow` é chamada dentro de um bloco `try`.
- Se a chamada a `aFunction` falhar, a execução será desviada para o bloco `catch`.
- No bloco `catch`, o erro é capturado e a mensagem de erro (`reason`) é emitida pelo evento `ErrorLogging`.

### Explicação do `try/catch`

- **Bloco `try`:**
    - Utilizado para tentar executar uma chamada de função que pode falhar.
    - Se a função for bem-sucedida, o código dentro do bloco `try` será executado.
- **Bloco `catch`:**
    - Se a chamada da função falhar, o bloco `catch` é executado.
    - No exemplo, o bloco `catch` captura um erro de tipo `Error` que retorna uma mensagem de erro (`reason`).
    - Outros tipos de `catch` incluem `catch (bytes memory lowLevelData)` para capturar erros de baixo nível sem uma mensagem de erro específica.
    
    ---
    
    ## **Chamadas de Função Externa e Chamadas de Baixo Nível em Profundidade**
    
    ### Diferenças entre `.send` e `.transfer`
    
    1. **Limite de Gás:**
        - **`.transfer`:** Envia 2300 unidades de gás fixas ao destinatário, o que é suficiente apenas para uma operação básica de recebimento. Se o código do destinatário tentar usar mais gás, a transação falhará.
        - **`.send`:** Também envia 2300 unidades de gás por padrão. No entanto, `.send` retorna um booleano indicando sucesso (`true`) ou falha (`false`), permitindo ao chamador lidar com falhas de forma programática.
    2. **Tratamento de Erros:**
        - **`.transfer`:** Reverte automaticamente a transação se a transferência falhar. Portanto, se a transferência não for bem-sucedida, a execução do contrato também falha.
        - **`.send`:** Não reverte automaticamente em caso de falha. Em vez disso, retorna um valor booleano que o chamador pode verificar para decidir o que fazer em caso de falha.
    3. **Segurança:**
        - **`.transfer`:** É considerada mais segura porque limita a quantidade de gás disponível para o código de fallback do destinatário, evitando ataques de reentrada.
        - **`.send`:** Oferece a mesma limitação de gás, mas o chamador deve lidar explicitamente com possíveis falhas, o que pode introduzir complexidade e riscos se não for tratado corretamente.
        
        ```jsx
        Diferença .send e .transfer
        //SPDX-License-Identifier: MIT
        
        pragma solidity 0.8.15;
        
        contract Sender {
            receive() external payable {}
        
            function withdrawTransfer(address payable _to) public {
                _to.transfer(10);
            }
        
            function withdrawSend(address payable _to) public {
                bool sentSuccessful = _to.send(10);
            }
        }
        
        contract ReceiverNoAction {
        
            function balance() public view returns(uint) {
                return address(this).balance;
            }
        
            receive() external payable {}
        }
        
        contract ReceiverAction {
            uint public balanceReceived;
        
            function balance() public view returns(uint) {
                return address(this).balance;
            }
        
            receive() external payable {
                balanceReceived += msg.value;
            }
        }
        ```
        
        No Solidity, as funções `.send` e `.transfer` são utilizadas para transferir ether de um contrato para outro endereço. Ambas têm suas peculiaridades e diferenças importantes que afetam seu uso. Vamos detalhar essas diferenças no contexto dos contratos fornecidos.
        
        ### Análise do Código
        
        1. **Contrato `Sender`:**
            - A função `withdrawTransfer` utiliza `.transfer` para enviar 10 wei para o endereço `_to`. Se a transferência falhar, a transação é revertida automaticamente.
            - A função `withdrawSend` utiliza `.send` para enviar 10 wei para o endereço `_to`. A variável `sentSuccessful` armazena o resultado da operação (`true` se a transferência for bem-sucedida, `false` caso contrário). Em seguida, o `require` verifica se a transferência foi bem-sucedida, revertendo a transação se não foi.
        2. **Contratos `ReceiverNoAction` e `ReceiverAction`:**
            - Ambos os contratos possuem uma função `receive` que permite que eles recebam ether.
            - O `ReceiverNoAction` não realiza nenhuma ação ao receber fundos, enquanto o `ReceiverAction` incrementa a variável `balanceReceived` pelo valor recebido.
            
        
        ---
        
        ### Utilizando call:
        
        ```jsx
        // SPDX-License-Identifier: GPL-3.0
        pragma solidity 0.8.15;
        
        contract ContractOne {
        
            mapping(address => uint) public addressBalances;
        
            function getBalance() public view returns(uint) {
                return address(this).balance;
            }
        
            receive() external payable {
                addressBalances[msg.sender] += msg.value;
            }
        }
        
        contract ContractTwo {
        
            function deposit() public payable {}
        
            function depositOnContractOne(address _contractOne) public { 
                (bool success, ) = _contractOne.call{value: 10, gas: 100000}("");
                require(success);
            }
        }
        
        ```
        
        ### Descrição do Contrato `ContractTwo`:
        
        - **Função `deposit`:**
            - Uma função `payable` vazia que permite ao contrato receber ether. Não faz nada além de aceitar o pagamento.
        - **Função `depositOnContractOne`:**
            - Esta função utiliza a função `call` para transferir 10 wei de ether para o contrato `ContractOne` no endereço `_contractOne`.
            - A função `call` inclui um parâmetro de gás (`gas: 100000`) para especificar o limite de gás disponível para a execução da chamada.
            - A função verifica o sucesso da operação usando a variável `success` e reverte a transação se `success` for `false`.
            
            ### O que Muda:
            
            1. **Uso de `call` em vez de `.send` ou `.transfer`:**
                - **`call` é mais flexível:** A função `call` permite especificar a quantidade de ether enviada e o limite de gás disponível para a execução da chamada.
                - **Transferência genérica:** `call` é mais genérica e pode ser usada para enviar ether e executar funções arbitrárias do contrato de destino, ao contrário de `.send` e `.transfer`, que são usados apenas para enviar ether.
            2. **Limite de Gás:**
                - Na função `depositOnContractOne`, o limite de gás é explicitamente definido como `100000` unidades. Isso garante que a execução da função de fallback (ou `receive`) no `ContractOne` tenha gás suficiente para ser concluída.
            3. **Verificação de Sucesso:**
                - A função `depositOnContractOne` verifica se a chamada foi bem-sucedida com `(bool success, ) = _contractOne.call{value: 10, gas: 100000}("");`. Se a chamada falhar, a transação é revertida com `require(success);`.
                
            
            ### Diretrizes para Determinar Necessidade de Mais Gás
            
            1. **Operações de Armazenamento:**
                - **Gravação de Dados:** Operações que escrevem dados na blockchain, como atualizações de mapeamento (`mapping`) ou armazenamento de variáveis de estado, são caras. Cada gravação pode custar cerca de 20.000 unidades de gás ou mais.
                - **Remoção de Dados:** Deletar dados também consome gás, embora possa haver reembolsos de gás em certas condições.
            2. **Loops e Iterações:**
                - **Loops (for, while):** Loops que percorrem arrays ou mapeamentos podem consumir grandes quantidades de gás, especialmente se o número de iterações não for fixo e puder ser grande.
            3. **Chamadas a Contratos Externos:**
                - **Chamadas de Função:** Chamar funções em outros contratos pode ser caro, especialmente se essas funções realizarem operações complexas.
                - **Transferência de Ether:** Enviar Ether para outros contratos pode exigir mais gás se os contratos destinatários executarem lógica adicional ao receber Ether (por exemplo, em `receive` ou `fallback`).
            4. **Funções Complexas:**
                - **Lógica Complexa:** Funções que envolvem cálculos intensivos, várias operações de leitura/escrita ou lógica condicional complexa consomem mais gás.
                - **Modificadores e Verificações:** Uso de modificadores e várias verificações de condições (como `require` e `assert`) pode aumentar o consumo de gás.
            5. **Padrões de Design:**
                - **Funções Pagáveis:** Funções marcadas como `payable` que incluem lógica adicional além de apenas aceitar Ether.
                - **Contratos Upgradáveis:** Padrões que envolvem proxies e contratos de implementação podem necessitar de chamadas adicionais e, portanto, mais gás.