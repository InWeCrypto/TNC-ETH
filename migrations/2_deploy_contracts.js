var token = artifacts.require("./TrinityToken.sol");

module.exports = function(deployer) {
    deployer.deploy(token);
};
