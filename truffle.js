module.exports = {
  networks: {
    localhost: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id,
      gas: 3000000
    },
    
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id,
      gas: 3000000
    }
  }
};
