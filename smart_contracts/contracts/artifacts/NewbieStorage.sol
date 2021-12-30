// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;


contract NewbieStorage {

    // variable with no value initializes as the null type value => str '', number 0...
    uint256 public myNumber;
    //int256 myNumber2 = 6;
    //bool myBoolean = true;
    //string myString = 'Hello!';
    //address myAddress =  0x0000000000000000000000000000000000000000;
    //bytes32 myBytes = 'cat';

    struct People {
        uint256 number;
        string name;
    }

    People[] public people;
    mapping(string => uint256) public nameToNumber;
 
    function storeMyNumber(uint256 _myNewNumber) public {
        myNumber = _myNewNumber;
    }

    function getMyNumber() public view returns(uint256) {
        return myNumber;
    }

    function addPerson(string memory _name, uint256 _myNumber) public {
        people.push(People(_myNumber,_name));
        nameToNumber[_name] = _myNumber;
    }

/*     function retrievePeople() public view returns(People[]) {
        return people;
    } */
}