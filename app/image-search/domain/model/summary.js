function Summary(image, snippet, thumbnail, context) {

  this.getImage = function() {
    return image;
  };

  this.getThumbnail = function() {
    return thumbnail;
  };

  this.getSnippet = function() {
    return snippet;
  };

  this.getContext = function() {
    return context;
  };

}

module.exports = Summary;
