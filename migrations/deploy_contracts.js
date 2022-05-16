const Dai = artifacts.require("Dai");
const MyDefiProject = artifacts.require("MyDefiProject");

module.exports = async function (deployer, _network, accounts) {
    await deployer.deploy(Dai);
    const dai = await Dai.deployed();
    await deployer.deploy(MyDefiProject, dai.address);
    const myDefiProject = await MyDefiProject.deployed();
    await myDefiProject.foo(accounts[1], 100)

    const balance0 = await dai.balanceOf(myDefiProject.address);
    const balance1 = await dai.balanceOf(accounts[1]);
    console.log(balance0.toString())
    console.log(balance1.toString())

//    use kovan kovan to get some kovan ether
//    use oasis interface to get some Dai
//    migrations script: deploy your smart contract (MyDefi Project)
//    execute this foo() function of yor smart contract
};
