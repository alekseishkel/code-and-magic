'use strict';

(function () {
  var FILE_TYPES = ['jpg', 'png', 'jpeg', 'gif'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var prewiev = document.querySelector('.setup-user-pic');
  var setupIcon = document.querySelector('.setup-open-icon')

  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader;

      reader.addEventListener('load', function () {
        prewiev.src = reader.result;
        setupIcon.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();