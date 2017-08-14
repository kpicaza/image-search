function MakeSearchAction(repository) {

  this.invoke = function (request, response) {

    repository.search(request.query)
      .then(function (data) {
        response.json(data);
      })
      .catch(function (e) {
        response.status(400).json({error: 'Invalid arguments.'});
      });

  };

}

module.exports = MakeSearchAction;
