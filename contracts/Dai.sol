// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
    // wei
    constructor(uint256 initialSupply) ERC20("OurToken", "OT") {
    }
    
    function faucet(address recipient, uint amount) external {
        _mint(recipient, amount);
    }
    
}