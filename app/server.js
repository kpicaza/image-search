var env = require('node-env-file');
var express = require('express');
var container = require('./container');

env(__dirname + '/../.env');

var app = express();

app.get('/', container['HomePageAction']().invoke);
app.get('/api/images', container['MakeSearchAction']().invoke);
app.get('/api/recent-searches', container['ObtainRecentSearchAction']().invoke);

var listener = app.listen(process.env.PORT || 4200, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
