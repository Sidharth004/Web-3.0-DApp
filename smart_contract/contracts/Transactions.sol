//SPDX-License-Identifier: UNLICENSED

 pragma solidity ^0.8.0;

//contract is serving a purpose of class in terms of OOP
 contract Transactions {
    uint256 transactionCount;

    //Serves the purpose of a function
    //which we will call/invoke later

    //Here:
    //Each transaction must have an address from the sender
    //aDDRESS of the reciever
    //amount
    //message
    //timestamp (number to indicate when did we sent that transfer)
    //string keyword
    event Transfer(address from, address reeiver , uint amount , string message , uint256 timestamp , string keyword);


    //similar to n object
    //not declaring an obkect here we are just specifying what properties does the object have and of what type they are going to be ?

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;

        // now we know properties that our transaction needs to ahve
    }

    //to define an array of transactions

    //array of transfer structures
    //an array of objects
    TransferStruct[] transactions;

    function addToBlockchain(address payable receiver , uint amount , string memory message , string memory keyword) public {
        transactionCount ++;
        transactions.push(TransferStruct(msg.sender, receiver , amount , message , block.timestamp , keyword));

        emit Transfer(msg.sender , receiver , amount , message , block.timestamp , keyword);
    }

    //below function returns an array of differentstructure which it' going to get fro memory
    function getAllTransactions() public view returns (TransferStruct[] memory){


        return transactions;
    }

    function getTransactionCount() public view  returns (uint256){
        return  transactionCount ;
    }

    }
    

 