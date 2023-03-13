// SPDX-License-Identifier: MIT

pragma solidity 0.8.7; 

contract Engine{
    
    function bitsoper(uint nb1, uint nb2) pure public returns(uint) {
        uint result; 
        //We use bitwise operator "&"
        result = nb1 & nb2;
        return(result);
    }
}