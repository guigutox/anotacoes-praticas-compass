![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2830c040-a0c1-4902-8558-fdb91bfd042a/95e9dfb7-c78f-40d4-8ceb-d7be8cb60611/Untitled.png)

---

### Carteira simples:

Esse contrato permite uma conta enviar e outra receber, a função withDrawMoney serve para realizar a transferencia entre contas, enquanto a a fallback server para haver função de envio e o receive para que seja possivel receber

```jsx
//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract SimpleWallet{

    function withdrawMoney(address payable _to, uint _amount) public{
        _to.transfer(_amount);
    }

    fallback() external payable {}

    // Receive function to receive Ether
    receive() external payable {}
}
```

---

## Adicionando segurança:

Adicionando a variável owner e instanciando ela no construtor para receber o endereço de quem está enviando o contrato é possível criar um modificador (modifier) e assim realizar um require que verificar se o dono  é o mesmo endereço de quem está enviando a transação, caso seja ele autoriza deixa realizar, caso não seja ele não permite.

```jsx
//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract SimpleWallet{

    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(owner == msg.sender, "You are not the owner");
        _;
    }

    function withdrawMoney(address payable _to, uint _amount) public onlyOwner{  
        _to.transfer(_amount);
    }

    fallback() external payable {}

    // Receive function to receive Ether
    receive() external payable {}
}
```

---

## Allowance

Utilizando mapping, é possível guardar endereços e respectivamente quanto cada endereço pode retirar de eth do contrato.

## Event

### Descrição sobre `emit` e `event`

- **`event`**: É uma declaração no Solidity que permite a gravação de dados no log da blockchain. Os eventos são usados para emitir mensagens ou notificações durante a execução do contrato, e esses logs podem ser ouvidos por interfaces externas, como DApps ou serviços que monitoram a blockchain.
- **`emit`**: É usado para acionar um evento. Quando você usa `emit`, os dados fornecidos são gravados nos logs da transação, permitindo que interfaces externas possam detectar e reagir a esses eventos.

```jsx
// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Allowance {
    address public owner;
    mapping(address => uint) public allowance;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You are not the owner");
        _;
    }

    modifier ownerOrAllowed(uint _amount) {
        require(msg.sender == owner || allowance[msg.sender] >= _amount, "You are not allowed");
        _;
    }

    function addAllowance(address _who, uint _amount) public onlyOwner {
        allowance[_who] = _amount;
    }

    function reduceAllowance(address _who, uint _amount) internal {
        require(allowance[_who] >= _amount, "Allowance exceeded");
        allowance[_who] -= _amount;
    }
}

contract SimpleWallet is Allowance {

    event MoneySent(address indexed _beneficiary, uint _amount);
    event MoneyReceived(address indexed _from, uint _amount);

    function withdrawMoney(address payable _to, uint _amount) public ownerOrAllowed(_amount) {  
        require(_amount <= address(this).balance, "Insufficient funds");
        if (owner != msg.sender) {
            reduceAllowance(msg.sender, _amount);
        }
        _to.transfer(_amount);
        emit MoneySent(_to, _amount); // Emitir o evento MoneySent
    }

    fallback() external payable {
        emit MoneyReceived(msg.sender, msg.value); // Emitir o evento MoneyReceived
    }

    receive() external payable {
        emit MoneyReceived(msg.sender, msg.value); // Emitir o evento MoneyReceived
    }
}

```