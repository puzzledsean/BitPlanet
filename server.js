'use strict';
/**
 * Module dependencies.
 */
var init = require('./config/init')(),
	config = require('./config/config'),
	mongoose = require('mongoose'),
	chalk = require('chalk'),
	Socket = require('blockchain.info/socket');

	var mySocket = new Socket();

	// console.log('tryna figure out dis blockchain shit');
	// console.log('tyrone thing' + blockchain.blockexplorer.getBlock('00000000000000000174216a0b453298d9a8bfc489f69c2356bc0f8d51d17157').then(function(result){
	// 	console.log('SUCCESS-----------------------------------');
	// 	for(var i = 0; i < result.tx.length; i++){
	// 		console.log(result.tx[i].relayed_by);
	// 	}
	// }, function(err){
	// 	console.log(err);
	// }));

	console.log('SOCKET STUFF------------')
	mySocket.onTransaction(function(result){
		console.log(result.hash + ' this was socket stuff')
		console.log(result.relayed_by)
	});

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Bootstrap db connection
var db = mongoose.connect(config.db, function(err) {
	if (err) {
		console.error(chalk.red('Could not connect to MongoDB!'));
		console.log(chalk.red(err));
	}
});

// Init the express application
var app = require('./config/express')(db);

// Bootstrap passport config
require('./config/passport')();

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log('MEAN.JS application started on port ' + config.port);