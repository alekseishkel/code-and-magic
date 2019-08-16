'use strict';

(function () {
  var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var similarListElement = document.querySelector('.setup-similar-list');

  var inputCoatColor = document.querySelector('input[name=coat-color]');
  var inputEyesColor = document.querySelector('input[name=eyes-color]');
  var InputFireballColor = document.querySelector('input[name=fireball-color]');

  var similarWizardTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomElement = function (arr) {
    var randomElement = arr[Math.floor(Math.random() * arr.length)];
    return randomElement;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.save(new FormData(form), function () {
      window.setup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });

  var loadHandler = (function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  });

  var errorHandler = (function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  });

  window.load(loadHandler, errorHandler);

  wizardCoat.addEventListener('click', function () {
    var memoryWizardCoatColor = getRandomElement(WIZARD_COAT_COLOR);

    wizardCoat.style.fill = memoryWizardCoatColor;
    inputCoatColor.value = memoryWizardCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var memoryWizardEyesColor = getRandomElement(WIZARD_EYES_COLOR);

    wizardEyes.style.fill = memoryWizardEyesColor;
    inputEyesColor.value = memoryWizardEyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var memoryWizardFireballColor = getRandomElement(WIZARD_FIREBALL_COLOR)

    wizardFireball.style.backgroundColor = memoryWizardFireballColor;
    InputFireballColor.value = memoryWizardFireballColor;
  });
})();