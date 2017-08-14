
function StoreSearchListener(store) {

  this.handle = function (event) {
    store.append(event);
  };

}

module.exports = StoreSearchListener;
