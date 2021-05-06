const KokomoRouter = artifacts.require("KokomoRouter")

const FACTORY_ADDRESS = '0x971A5f6Ef792bA565cdF61C904982419AA77989f'
// Testnet
// const WBNB_ADDRESS = '0xae13d989dac2f0debff460ac112a837c89baa7cd'
// Mainnet
const WBNB_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'

module.exports = async function(deployer) {
  await deployer.deploy(KokomoRouter, FACTORY_ADDRESS, WBNB_ADDRESS)
  const kokomoRouter = await KokomoRouter.deployed()
};
