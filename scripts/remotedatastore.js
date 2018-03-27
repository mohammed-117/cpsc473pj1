(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }
    this.serverUrl = url;
    //this.getAll();
  }

  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + "/" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  
  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
