'use strict';

(function () {

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

  var similarListElement = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    window.fragment = document.createDocumentFragment();

    while (similarListElement.firstChild) {
      similarListElement.removeChild(similarListElement.firstChild);
    }

    for (var i = 0; i < 4; i++) {
      window.fragment.appendChild(renderWizard(data[i]));
    }

    similarListElement.appendChild(window.fragment);
  };
  
})();