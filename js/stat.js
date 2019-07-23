'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_RANGE = 50;
var HISTOGRAM_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement && arr.length > 0) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    ctx.fillStyle = '#000';

    ctx.fillText(names[i], CLOUD_X + BAR_RANGE + (BAR_WIDTH + BAR_RANGE) * i, CLOUD_HEIGHT);
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_RANGE + (BAR_WIDTH + BAR_RANGE) * i, CLOUD_HEIGHT - (((HISTOGRAM_HEIGHT * times[i]) / maxTime) + TEXT_HEIGHT + FONT_GAP));

    ctx.transform(1, 0, 0, -1, 0, CLOUD_HEIGHT);
    
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var rgba = ['rgba(0, 0, 255, 0.3)', 'rgba(0, 0, 255, 0.4)', 'rgba(0, 0, 255, 0.5)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 0, 255, 0.7)', 'rgba(0, 0, 255, 0.8)', 'rgba(0, 0, 255, 0.9)', 'rgba(0, 0, 255, 1)'];

      var myDiv = rgba[parseInt(Math.random() * rgba.length)];

      ctx.fillStyle = myDiv;
    };

    ctx.fillRect(CLOUD_X + BAR_RANGE + (BAR_WIDTH + BAR_RANGE) * i, TEXT_HEIGHT, BAR_WIDTH, (HISTOGRAM_HEIGHT * times[i]) / maxTime);
    ctx.transform(1, 0, 0, -1, 0, CLOUD_HEIGHT);
  };
};

