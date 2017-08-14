function ObtainRecentSearchAction(store) {

  this.invoke = function (request, response) {
    store.lastTenSearches().then(function (data) {

      response.json(data.map(function (event) {
        return {
          query: event.data.query,
          offset: event.data.offset,
          ocurred_on: event.occurredOn
        };
      }));

    }).catch(function (e) {
      response.status(400).json({ error: 'Invalid arguments.' });
    });
  }

}

module.exports = ObtainRecentSearchAction;
