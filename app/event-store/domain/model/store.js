
function Store(gateway) {

  this.append = function (event) {
    gateway(event, 'insert');
  };

  this.lastTenSearches = function () {
    return gateway({
      name: 'SearchWasMade'
    }, 'find', 10)
      .then(function (data) {
        return data;
    });
  };

}

module.exports = Store;
