var request = require('request');
var Promise = require('rsvp').Promise;
var Summary = require('../domain/model/summary');

module.exports = function (data, method) {
  var gateway = new Gateway();

  var queryParams = {
    method: 'GET',
    url: 'https://www.googleapis.com/customsearch/v1',
    qs: {
      key: process.env.GOOGLE_API_KEY,
      cx: process.env.GOOGLE_API_ID,
      searchType: 'image',
      q: data.query,
      start: data.start
    }
  };

  var callback = gateway[method];

  return callback(queryParams);
};

function Gateway() {

  this.find = function(options) {
    return new Promise(function (resolve, reject) {
      request(options, function (error, response, body) {
        if (error) {
          reject(error);
        }

        var items = JSON.parse(body).items;

        if (0 >= items.length) {
          reject('Empty response')
        }

        resolve(items.map(function (item) {
          return new Summary(
            item.link,
            item.title,
            item.image.thumbnailLink,
            item.image.contextLink
          );
        }));
      });
    });

  };

}
