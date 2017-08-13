var env = require('node-env-file');
var express = require('express');
var homePageAction = require('./image-search/application/home-page-action');

env(__dirname + '/../.env');

var app = express();

app.get('/', homePageAction);

var listener = app.listen(process.env.PORT || 4200, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
