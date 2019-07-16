'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_RANGE = 50;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var HISTOGRAM_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = arr[0];
    
    for (var i = 1; i < arr.length; i ++) {
        if (arr[i] > maxElement && arr.length > 0) {
          maxElement = arr[i];
        }
    }

    return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';

    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + GAP + FONT_GAP);

    var maxTime = getMaxElement(times);

    // //for (var i = 0; i < names.length; i++) {
    //     ctx.fillText(names[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * i);
    //     ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (BAR_HEIGHT + GAP) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
    // }
};

