var Promise = require('rsvp').Promise;
var Summary = require('../domain/model/summary');

var searchData = [
  {
    url: "https://i.ytimg.com/vi/8nOsEEBrEuA/hqdefault.jpg",
    snippet: "LOLCats in All Fired Up lol Cats Rock Funny Cats - YouTube",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWNpmeNmLlMNc0v32tK83j4eOrOPVS6M2kty-CVFzQTvbS9d9WdKfrg7E",
    context: "https://www.youtube.com/watch?v=8nOsEEBrEuA"
  },
  {
    url: "http://www.bajiroo.com/wp-content/uploads/2013/06/funny-lol-cats-fun-pics-images-photos-pictures-5.jpg",
    snippet: "33 Funniest LOLcats Ever | Bajiroo.com",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXCGnfYdIRdxb86GIz-VCaSsgmgG5uS27hMCq1IquRvSTd2zwQwtphXA",
    context: "http://www.bajiroo.com/33-funniest-lolcats-ever"
  }
];

module.exports = function (data, method) {
  return new Promise(function (resolve, reject) {
    if ('find' !== method) {
      reject('Invalid method rrequests.')
    }

    resolve(searchData.map(function (item) {
      return new Summary(
        item.url,
        item.snippet,
        item.thumbnail,
        item.context
      );
    }));
  });
};
