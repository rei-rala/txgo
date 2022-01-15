// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract Transactions {
    uint256 transactionCount;

    event Transfer(
        address from,
        address receiver,
        uint256 amount,
        uint256 timestamp
    );

    struct TransferStruct {
        address from;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    TransferStruct[] transactions;

    function addToBlock(address payable receiver, uint256 amount) public {
        emit Transfer(msg.sender, receiver, amount, block.timestamp);
        
        transactions.push(
            TransferStruct(msg.sender, receiver, amount, block.timestamp)
        );

        transactionCount++;
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
