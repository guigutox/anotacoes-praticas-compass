//SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Allowance{


    event allowanceChanged(address indexed _forWho, address indexed _fromWhom, uint _oldAmount, uint _newAmount);

    address public owner;

    constructor(){
        owner = msg.sender;
    }

    mapping (address=>uint) public allowance;

    modifier ownerOrAllowed(uint _amount){
            require(msg.sender==owner|| allowance[msg.sender]>=_amount, "You are not allowed");
            _;
    }
    
    function addAllowance(address _who, uint _amount) public  {
        emit allowanceChanged(_who, msg.sender , allowance[_who], _amount);
        allowance[_who] = _amount;
    }

    function reduceAllowance(address _who, uint _amount) internal {
        emit allowanceChanged(_who, msg.sender, allowance[_who], allowance[_who]- _amount); 
        allowance[_who] -= _amount;
    }


}


contract SimpleWallet is Allowance{

    event MoneySent(address indexed _beneficiary, uint _amount);
    event MoneyReceived(address indexed _from, uint _amount);

    modifier onlyOwner(){
        require(owner == msg.sender, "You are not the owner");
        _;
    }

    function withdrawMoney(address payable _to, uint _amount) public ownerOrAllowed(_amount){  
        require(_amount <= address(this).balance, "Sem fundos suficientes");
        if(owner != msg.sender){
            reduceAllowance(msg.sender, _amount);
        }
        _to.transfer(_amount);
    }

    fallback() external payable {
         emit MoneyReceived(msg.sender, msg.value);
    }

    // Receive function to receive Ether
    receive() external payable {}
}