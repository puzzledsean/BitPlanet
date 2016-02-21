// public/js/controllers/NerdCtrl.js

var BlockchainWallet = require('blockchain-wallet'),
    blockchainWallet = new BlockchainWallet("YourGuid", "YourPassword"),
    // Certain API methods require a second password if the wallet is second password protected, while others don't at all. 
    transactionBlockchainWallet = new BlockchainWallet("YourGuid", "YourPassword", "YourSecondPassword");
 
blockchainWallet.list(function(err, data) {
  if(err) {
    throw err;
  }
 
  console.log(data);
});
 
// Send a donation to blockchain.info. 
transactionBlockchainWallet.payment("1JArS6jzE3AJ9sZ3aFij1BmTcpFGgN86hA", 500, {"note": "Thanks"}, function(err, data) {
  if(err) {
    throw err;
  }
 
  console.log(data);
});

angular.module('TransactionCtrl', []).controller('TransactionController', function($scope) {

    $scope.transaction = 'Here's a placeholder!';

});
