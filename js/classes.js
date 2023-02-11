var foo = (function () {
  var publicApi = {
    bar: function () {
      publicApi.baz();
    },
    baz: function () {
      console.log("baz");
    },
  };

  return publicApi;
})();
