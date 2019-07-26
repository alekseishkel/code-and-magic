'use strict'

var WIZARD_NAMES = ['Иван ', 'Хуан-Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.getElementById('similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;   

var getRandomElement = function (arr) {
  var randomElement = Math.floor(Math.random() * arr.length);
  var randomWizardElement = arr[randomElement];
  return randomWizardElement;
};

var wizards = [
  {
    name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARDS_LAST_NAMES),
    coatColor: getRandomElement(coatColor),
    eyesColor: getRandomElement(eyesColor)
  },
  {
    name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARDS_LAST_NAMES),
    coatColor: getRandomElement(coatColor),
    eyesColor: getRandomElement(eyesColor)
  },
  {
    name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARDS_LAST_NAMES),
    coatColor: getRandomElement(coatColor),
    eyesColor: getRandomElement(eyesColor)
  },
  {
    name: getRandomElement(WIZARD_NAMES) + getRandomElement(WIZARDS_LAST_NAMES),
    coatColor: getRandomElement(coatColor),
    eyesColor: getRandomElement(eyesColor)
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

setup.querySelector('.setup-similar').classList.remove('hidden');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}; 

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

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

