'use strict';

(function () {
  var userNameInput = window.setup.querySelector('.setup-user-name');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Введите имя, состоящее, минимум, из 2 символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Введите имя, состоящее от 2 до 25 симвовлов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Поле не должно быть пустым');
    } else {
      userNameInput.setCustomValidity('');
    }
  });
})();