pragma solidity ^0.4.20;

contract Inbox{
    
    string public message;
    
    constructor(string initialMessage) public 
    {
        message = initialMessage;
    }
    
    function setMessage(string _msg) public
    {
        message = _msg;
    }
    
}
