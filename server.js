var express = require('express');

var app = express();

var port = 1337;

app.use(express.static(__dirname));

app.listen(process.env.PORT || port);

// app.get('/', function(req, res) {
//   res.send("Hello")
// })

console.log('Server now listening on port ' + port);


