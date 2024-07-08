//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;

contract ExampleMsgSender{

    address public someAdress;

    function updateSomeAdress() public {
        someAdress = msg.sender;
    }


}