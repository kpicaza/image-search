var EventEmitter = require('events');
var HomePageAction = require('./image-search/application/home-page-action');
var MakeSearchAction = require('./image-search/application/make-search-action');
var ObtainRecentSearchAction = require('./image-search/application/obtain-recent-search-action');
var SummaryRepository = require('./image-search/domain/model/summary-repository');
var Store = require('./event-store/domain/model/store');
var StoreSearchListener = require('./image-search/domain/listener/store-search-listener');
var searchGateway = require('./image-search/infrastructure/google-custom-search-gateway');
var storeGateway = require('./event-store/infrastructure/mongo-store');

var container = {

  Store: function () {
    return new Store(storeGateway);
  },

  StoreSearchListener: function () {
    return new StoreSearchListener(
      this.Store()
    )
  },

  EventEmitter: function () {
    var emitter = new EventEmitter();

    emitter.on('SearchWasMade', this.StoreSearchListener().handle);

    return emitter;
  },

  SummaryRepository: function () {
    return new SummaryRepository(
      searchGateway,
      this.EventEmitter()
    );
  },

  HomePageAction: function () {
    return new HomePageAction();
  },

  MakeSearchAction: function () {
    return new MakeSearchAction(
      this.SummaryRepository()
    );
  },

  ObtainRecentSearchAction: function () {
    return new ObtainRecentSearchAction(
      this.Store()
    )
  }

};

module.exports = container;
