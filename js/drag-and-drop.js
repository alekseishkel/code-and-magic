'use strict';

(function () {
  window.dialogHandler = window.setup.querySelector('.setup-title');

  window.dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault;

    window.startCoordinats = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: moveEvt.clientX - window.startCoordinats.x,
        y: moveEvt.clientY - window.startCoordinats.y
      };

      window.startCoordinats = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.startCoordinats.x = moveEvt.clientX;
      window.startCoordinats.y = moveEvt.clientY;

      window.setup.style.left = (window.setup.offsetLeft + shift.x) + 'px';
      window.setup.style.top = (window.setup.offsetTop + shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault;

      if (dragged) {
        var onClickPreventHandler = function (evt) {
          evt.preventDefault();
          window.dialogHandler.removeEventListener('click', onClickPreventHandler);
        };
        window.dialogHandler.addEventListener('click', onClickPreventHandler);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });
})();