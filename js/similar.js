'use strict';

(function () {
  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === window.coatColor) {
      rank += 3;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === window.fireballColor) {
      rank += 1;
    }

    return rank;
  };

  var namesRank = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1
    } else {
      return 0;
    }
  }

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesRank(left.name, right.name);
      }
      return rankDiff;
    }));
  }

  window.wizard.onCoatChange = function () {
    window.debounce(updateWizards);
  };

  window.wizard.onEyesChange = function () {
    window.debounce(updateWizards);
  };

  window.wizard.onFireballChange = function () {
    window.debounce(updateWizards);
  };

  var wizards = [];

  var loadHandler = function (data) {
    wizards = data;
    updateWizards();
  };

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
})();