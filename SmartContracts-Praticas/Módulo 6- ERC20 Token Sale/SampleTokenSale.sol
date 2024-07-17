// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;


abstract contract ERC20 {
    
    function decimals() public virtual view returns(uint);
    function transferFrom(address _from, address _to, uint256 _value) public virtual returns (bool success);
}


contract TokenSale{
    uint tokenPrinceInWei = 1 ether;

    ERC20 token;
    address tokenOwner;

    constructor(address _token){
        tokenOwner = msg.sender;
        token = ERC20(_token);
    }

    function purchaseACoffee() public payable{
        require(msg.value >= tokenPrinceInWei, "Not enouhg money sent");
        uint tokenToTransfer = msg.value/ tokenPrinceInWei;
        uint remainder = msg.value - tokenToTransfer * tokenPrinceInWei;
        token.transferFrom(tokenOwner, msg.sender, tokenToTransfer * 10 ** token.decimals());
        payable (msg.sender).transfer(remainder);
    }



}