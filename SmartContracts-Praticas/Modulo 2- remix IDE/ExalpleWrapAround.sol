//SPDX-License-Identifier: MIT

pragma solidity 0.8.1;


contract ExampleWrapAround {
    uint8 public myUint;

    function decrementUintUnchecked() public {
        unchecked {
            myUint--;
        }
    }

    function decrementUint() public {
        myUint--;
    }
}