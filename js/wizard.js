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

  window.coatColor = inputCoatColor.value;

  wizardCoat.addEventListener('click', function () {
    window.coatColor = getRandomElement(WIZARD_COAT_COLOR);

    wizardCoat.style.fill = window.coatColor;
    inputCoatColor.value = window.coatColor;

    window.wizard.onCoatChange(window.coatColor);
  });

  window.eyesColor = inputEyesColor.value;

  wizardEyes.addEventListener('click', function () {
    window.eyesColor = getRandomElement(WIZARD_EYES_COLOR);

    wizardEyes.style.fill = window.eyesColor;
    inputEyesColor.value = window.eyesColor;
    
    window.wizard.onEyesChange(window.eyesColor);
  });

window.fireballColor = InputFireballColor.value;

  wizardFireball.addEventListener('click', function () {
    window.fireballColor = getRandomElement(WIZARD_FIREBALL_COLOR)

    wizardFireball.style.backgroundColor = window.fireballColor;
    InputFireballColor.value = window.fireballColor;
    
    window.wizard.onFireballChange(window.eyesColor);
  });

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      window.setup.classList.add('hidden');
    }, window.errorHandler);
    evt.preventDefault();

    var wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = wizardCoat.style.fill;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizardEyes.style.fill;

    var wizardBase64Right = window.svg2base64(wizardCopy);

    wizardCopy.querySelector('#wizard').setAttribute('transform', 'translate(62, 0) scale(-1, 1)');

    var wizardBase64Left = window.svg2base64(wizardCopy);

    window.restartGame(wizardBase64Right, wizardBase64Left);
  });
})();