'use strict'

var WIZARD_NAMES = ['Иван ', 'Хуан-Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARDS_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.getElementById('similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var getRandomElement = function (arr) {
    var randomElement = Math.floor(Math.random() * arr.length);
    console.log(randomElement);
    return randomElement;
};

var wizards = [
    {
        name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + WIZARDS_LAST_NAMES[getRandomElement(WIZARDS_LAST_NAMES)],
        coatColor: coatColor[getRandomElement(coatColor)],
        eyesColor: eyesColor[getRandomElement(eyesColor)]
    },
    {
        name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + WIZARDS_LAST_NAMES[getRandomElement(WIZARDS_LAST_NAMES)],
        coatColor: coatColor[getRandomElement(coatColor)],
        eyesColor: eyesColor[getRandomElement(eyesColor)]
    },
    {
        name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + WIZARDS_LAST_NAMES[getRandomElement(WIZARDS_LAST_NAMES)],
        coatColor: coatColor[getRandomElement(coatColor)],
        eyesColor: eyesColor[getRandomElement(eyesColor)]
    },
    {
        name: WIZARD_NAMES[getRandomElement(WIZARD_NAMES)] + WIZARDS_LAST_NAMES[getRandomElement(WIZARDS_LAST_NAMES)],
        coatColor: coatColor[getRandomElement(coatColor)],
        eyesColor: eyesColor[getRandomElement(eyesColor)]
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

userDialog.querySelector('.setup-similar').classList.remove('hidden');

