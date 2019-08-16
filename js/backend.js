'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';

  window.save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
        console.log(xhr.response);
      } else {
        onError('Статус ответа сервера: ' + xhr.status + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания, которорое составило: ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 30000;

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
      var error;
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          console.log(xhr.response);
          break;

        case 400:
          error = 'Неверный запрос';
          break;
        case 401:
          error = 'Пользователь на авторизован';
          break;
        case 404:
          error = 'Ничего не найдено';
          break;

        default:
          error = ('Статус ответа сервера: ' + xhr.status + '' + xhr.statusText);
      }
      if (error) {
        onError(error);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Превышено время ожидания, которорое составило: ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 30000;

    xhr.send();
  };
})();