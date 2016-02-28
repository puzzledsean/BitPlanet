var express = require('express');
var app = express();

Socket = require('blockchain.info/socket');

var mySocket = new Socket();

var buf = [], i = 0

var element = '';

mySocket.onTransaction(function(result){
	//console.log("result " + result.hash);
	//console.log(result.relayed_by);
	buf[i++] = '<div id="pings' + i + '"style="height: 5px; width: 5px; border-radius: 100%; background-color: #222; color: #fff; padding: 5px;">'
	//buf[i++] = "r" + result.hash;
	buf[i++] = "ip" + result.relayed_by;
	buf[i++] = "</div>";
	//console.log("buf" + buf.join("");
	//var doc = parser.parseFromString(buf.join(""), "text");
	element = buf.join("");
	console.log("Elem: " + element);
});

// used to run app locally or via Heroku
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

// ejs is used as a templating system to reduce the number of
// lines of HTML that have to be written
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/transactions', function(req, res) {
  res.send('This: ' + element);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


