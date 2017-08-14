var chai = require('chai');
var expect = chai.expect;
var Summary = require('../../../../app/image-search/domain/model/summary');

var image = 'https://some.image/url.jpg';
var thumbnail = 'https://some.image/thmbnail-url.jpg';
var snippet = 'LOLCats in All Fired Up lol Cats Rock Funny Cats - YouTube';
var context = "https://www.youtube.com/watch?v=8nOsEEBrEuA";

describe('Summary', function () {

  var summary = new Summary(image, snippet, thumbnail, context);

  it('getImage() should return an image url', function () {
    expect(summary.getImage()).to.equal(image);
  });

  it('getThumbnail() should return a image thumbnail url', function () {
    expect(summary.getThumbnail()).to.equal(thumbnail);
  });

  it('getSnippet() should return an image description text.', function () {
    expect(summary.getSnippet()).to.equal(snippet);
  });

  it('getContext() should return an image holder website url.', function () {
    expect(summary.getContext()).to.equal(context);
  });

});
