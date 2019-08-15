'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.save = function (data, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onLoad(xhr.response);
      console.log(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();

(function () {
  var URL = 'https://js.dump.academy/code-and-magick/data';

  window.load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
      onLoad(xhr.response);
      console.log(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + '' + xhr.statusText);
      }
    });

    xhr.send();
  };
})();

