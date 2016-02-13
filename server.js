// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

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


// configuration ===========================================
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./app/routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;     