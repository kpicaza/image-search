var mongo = require('mongodb').MongoClient;
var Promise = require('rsvp').Promise;

module.exports = function (data, method, limit) {
  return new Promise(function (resolve, reject) {
    mongo.connect(process.env.MONGO, function (err, db) {
      if (err) {
        reject(err);
      }

      var store = new Store(db);

      // Returns Promise.
      var callable = store[method];

      callable(data, limit).then(function (data) {
        resolve(data);
      });
    });
  });
};

function Store(db) {

  var collection;

  var constructor = function (db) {
    collection = db.collection('event-store');
  };

  constructor(db);

  this.find = function (criteria, limit) {
    return new Promise(function (resolve, reject) {
      collection
        .find(criteria, {
          sort: {occurredOn: -1},
          limit: limit
        })
        .toArray(function (err, documents) {
          if (err) {
            reject(err);
          }

          resolve(documents);

          db.close();
        });
    });
  };


  this.insert = function (event) {
    return new Promise(function (resolve, reject) {
      collection.insert(event, function (err, data) {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  };

}
