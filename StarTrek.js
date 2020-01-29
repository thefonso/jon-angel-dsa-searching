const BinarySearchTree = require('./BinarySearchTree');

let BST = new BinarySearchTree();

BST.insert(5, 'Captain Picard');
BST.insert(3, 'Commander Riker');
BST.insert(6, 'Commander Data');
BST.insert(2, 'Lt. Cmdr. Worf');
BST.insert(4, 'Lt. Cmdr.LaForge');
BST.insert(1, 'Lieutenant security-officer');
BST.insert(6, 'Commander Data');
BST.insert(8, 'Lt. Cmdr. Crusher');
BST.insert(7, 'Lieutenant Selar');


//console.log(BST);


let pricesArray = [128, 97, 121, 123, 98, 97, 105]

function maxProfit(prices) {
  if (!prices.length) {
    return 0;
  }

  let buy = prices[0], sell = prices[0], profit = 0;
  for (let i = 1; i < prices.length; ++i) {
    sell = prices[i];
    if (sell < buy) buy = sell;
    if (sell - buy > profit) profit = sell - buy;
  }
  return profit;
}
console.log(maxProfit(pricesArray));

