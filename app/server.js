var env = require('node-env-file');
var express = require('express');

env(__dirname + '/../.env');

var app = express();

var listener = app.listen(process.env.PORT || 4200, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
