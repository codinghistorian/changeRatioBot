const { StacksTestnet } = require('@stacks/network');
const { makeContractCall, broadcastTransaction } = require('@stacks/transactions');
const BigNum = require('bn.js');

const network = new StacksTestnet();

async function changeRatio(contractAddress, contractName, newRatio, senderKey) {
  const txOptions = {
    contractAddress,
    contractName,
    functionName: 'changeRatio',
    functionArgs: [new BigNum(newRatio)],
    senderKey,
    network,
  };

  const transaction = await makeContractCall(txOptions);
  const result = await broadcastTransaction(transaction, network);
  return result;
}
