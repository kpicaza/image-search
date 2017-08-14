function ObtainRecentSearchAction(store) {

  this.invoke = function (request, response) {
    store.lastTenSearches().then(function (data) {
      response.json(data);
    }).catch(function (e) {
      response.status(400).json({ error: 'Invalid arguments.' });
    });
  }

}

module.exports = ObtainRecentSearchAction;
