'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  var inputCoatColor = document.querySelector('input[name=coat-color]');
  var inputEyesColor = document.querySelector('input[name=eyes-color]');
  var InputFireballColor = document.querySelector('input[name=fireball-color]');


  var getRandomElement = function (arr) {
    var randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
  };

  wizardCoat.addEventListener('click', function () {
    window.coatColor = getRandomElement(WIZARD_COAT_COLOR);

    wizardCoat.style.fill = window.coatColor;
    inputCoatColor.value = window.coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    window.eyesColor = getRandomElement(WIZARD_EYES_COLOR);

    wizardEyes.style.fill = window.eyesColor;
    inputEyesColor.value = window.eyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    window.fireballColor = getRandomElement(WIZARD_FIREBALL_COLOR)

    wizardFireball.style.backgroundColor = window.fireballColor;
    InputFireballColor.value = window.fireballColor;
  });
})();