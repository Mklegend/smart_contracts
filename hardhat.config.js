require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    local:{
      url: 'http://127.0.0.1:7545',
      accounts:['7499b90548d6266f8c738b2df5efafd514d4c55fc49340b1c330921679461984']
    }
  }
}