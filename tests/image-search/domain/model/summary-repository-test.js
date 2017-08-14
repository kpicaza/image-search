var chai = require('chai');
var expect = chai.expect;
var EventEmitter = require('events');

var searchGateway = require('../../../../app/image-search/infrastructure/in-memory-search-gateway');
var Repository = require('../../../../app/image-search/domain/model/summary-repository');

var searchQuery = { query: 'lolcats funny', offset: 1 };
var results;

searchGateway(searchQuery, 'find').then(function (data) {
  results = data;
});

describe('SummaryRepository', function () {

  var emitter = new EventEmitter();

  it('search(string) should return a collection of Summary objects', function () {
    emitter.on('SearchWasMade', function (event) {
      expect(event.data).to.equal(searchQuery)
    });

    var repository = new Repository(searchGateway, emitter);

    repository.search(searchQuery).then(function (data) {
      expect(data).to.equal(results);
    });
  });
});

