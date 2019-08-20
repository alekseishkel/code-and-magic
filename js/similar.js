'use strict'

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

var updateWizards = function (wizards) {
  // var mostSimilarWizards = wizards.filter(function (it) {
  //   return it.colorCoat === window.coatColor && it.colorEyes === window.eyesColor &&
  //     it.colorFireball === window.fireballColor;
  // });

  // var sameCoatWizards = wizards.filter(function (it) {
  //   return it.colorCoat === window.coatColor;
  // });
  // var sameEyesWizards = wizards.filter(function (it) {
  //   return it.colorEyes === window.eyesColor;
  // });
  // var sameFireballWizards = wizards.filter(function (it) {
  //   return it.colorFireball === window.fireballColor;
  // });

  // var filteredWizards = mostSimilarWizards;
  // filteredWizards = mostSimilarWizards.concat(sameCoatWizards);
  // filteredWizards = mostSimilarWizards.concat(sameEyesWizards);
  // filteredWizards = mostSimilarWizards.concat(sameFireballWizards);
  // filteredWizards = mostSimilarWizards.concat(wizards);

  // var uniqueWizards = filteredWizards.filter(function (it, i) {
  //   return filteredWizards.indexOf(it) === i;
  // });

  renderWizard(wizards.sort(function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = wizardsSort(left.name, right.name);
    }
    return rankDiff;
  }));
};


var getRank = function (wizard) {
  var rank = 0;
  if (wizard.colorCoat === window.coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === window.eyesColor) {
    rank += 1;
  }
  if (wizard.colorFireball === window.fireballColor) {
    rank +=1;
  }

  return rank;
};

var wizardsSort = function(left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
};

var wizards = [];

var loadHandler = (function (data) {
  wizards = data;

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