var express = require('express');
var fs = require('fs');
var app = express();
var buffer = new Buffer(fs.readFileSync("index.html"));
var text = buffer.toString();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
