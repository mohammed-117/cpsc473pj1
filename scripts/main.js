(function(window) {
  "use strict"
  var App = window.App;
  var DETAIL_IMAGE_SELECTOR = "[data-image-role='displayImage']";
  var THUMBNAIL_LINK_SELECTOR = "[data-image-role='trigger']";
  var SERVER_URL = "http://localhost:2404/coffeeorders";
  var RemoteDataStore = App.RemoteDataStore;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var imageArray = [];

  /*  remoteDS.getAll(function(data) {
        for (var i = 0; i < data.length; i++) {
          imageArray[i] = data[i];
        }
      }
    });
*/

  function imageFromThumb(thumbnail) {
    return thumbnail.getAttribute("type");
  }


  function setDetailsFromThumb(thumbnail) {
    setDetails(imageFromThumb(thumbnail));
  }

  function getThumbnailsArray() {
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
  }

  function getCurrentImageIndex() {
    imageArray = getThumbnailsArray();
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    for (var i = 0; i < imageArray.length; i++) {
      if (imageArray[i].getAttribute("data-image-url") == detailImage.getAttribute("src")) {
        return i;
      }
    }
    return -1;
  }

  function next() {
    imageArray = getThumbnailsArray();
    var nextImage = (getCurrentImageIndex() + 1) % thumbnailArray.length;
    setDetails(imageFromThumb(imageArray[nextImage]));
  }

  function previous() {
    imageArray = getThumbnailsArray();
    var prevImage = (getCurrentImageIndex() - 1 + thumbnailArray.length) % thumbnailArray.length;
    setDetails(imageFromThumb(imageArray[prevImage]));
  }
})(window);
