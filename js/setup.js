'use strict';

(function () {
  var WIZARD_NAMES = ['Иван ', 'Хуан-Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
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
    //var randomWizardElement = arr[randomElement];
    return randomElement;
  };

  var wizards = [
    {
      name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARD_LAST_NAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    },
    {
      name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARD_LAST_NAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    },
    {
      name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARD_LAST_NAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    },
    {
      name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARD_LAST_NAMES),
      coatColor: getRandomElement(WIZARD_COAT_COLOR),
      eyesColor: getRandomElement(WIZARD_EYES_COLOR)
    }
  ];

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

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