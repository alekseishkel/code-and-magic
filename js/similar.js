var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.getElementById('similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

  return wizardElement;
};

var loadHandler = (function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
});

window.errorHandler = (function (errorMessage) {
  var node = document.createElement('div');
  node.style = 'z-index: 100; text-align: center; background-color: red;';
  node.style.position = 'absolute';
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = '30px';

  node.textContent = errorMessage;
  document.body.insertAdjacentElement('afterbegin', node);
});

window.load(loadHandler, window.errorHandler);