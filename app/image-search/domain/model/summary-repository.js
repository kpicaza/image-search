
function SummaryRepository(gateway, emitter) {

  this.search = function (query) {
    var result = gateway(query, 'find').then(function (data) {
      return data.map(function (summary) {
        return {
          url: summary.getImage(),
          snippet: summary.getSnippet(),
          thumbnail: summary.getThumbnail(),
          context: summary.getContext()
        };
      });
    });

    emitter.emit('SearchWasMade', {
      name: 'SearchWasMade',
      data: query,
      occurredOn: new Date()
    });

    return result;
  };

}

module.exports = SummaryRepository;
