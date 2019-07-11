var express = require('/usr/local/lib/node_modules/express');
var app = express();

app.get('/', function (req, res) {
    console.log('working');
})

app.listen(3000, function () {
   console.log("App listening on port 3000");
});