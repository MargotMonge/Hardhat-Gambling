// SPDX-License-Identifier: MIT

pragma solidity 0.8.7; 


import "./Engine.sol";

contract Game is Engine{

    uint randNonce = 0;
    uint bitsresult;

    //First create the function for random number generation 
    function randNB(uint _modulus) internal returns(uint){
    randNonce++; 
    return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender,randNonce))) % _modulus;
    }

    //We build the actual game function 
    function gameResults(uint userInput) public returns(bool result){
    //Reduce randomness so that nb1 = nb2 = 0 
    uint nb1 = randNB(1);
    uint nb2 = randNB(1);
    //We call function from "operator" contract in Engine file
    bitsresult = bitsoper(nb1, nb2);
    if (bitsresult == userInput){
                result = true;
            } else {
                result = false;
            }      
    return (result); 
          
    }  
}