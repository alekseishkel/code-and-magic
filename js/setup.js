'use strict'

var WIZARD_NAMES = ['Иван ', 'Хуан-Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var similarListElement = document.querySelector('.setup-similar-list');

var inputCoatColor = document.querySelector('input[name=coat-color]');
var inputEyesColor = document.querySelector('input[name=eyes-color]');
var InputFireballColor = document.querySelector('input[name=fireball-color]')

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

var dialogHandler = setup.querySelector('.setup-user-pic');

dialogHandler.addEventListener('mousedown', function (evt) {
  evt.preventDefault;

  var startCoordinats = {
    x: evt.clientX,
    y: evt.clientY
  };

  var dragged = false;

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    var shift = {
      x: moveEvt.clientX - startCoordinats.x,
      y: moveEvt.clientY - startCoordinats.y
    };

    startCoordinats = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.left = (setup.offsetLeft + shift.x) + 'px';
    setup.style.top = (setup.offsetTop + shift.y) + 'px';
  };

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault;

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    if (dragged) {
      var onClickPreventHandler = function (evt) {
        evt.preventDefault();
        dialogHandler.removeEventListener('click', onClickPreventHandler);
      };
      dialogHandler.addEventListener('click', onClickPreventHandler);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

});




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



