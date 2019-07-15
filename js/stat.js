'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.fillText('Вы', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP, barWidth, BAR_HEIGHT);

    ctx.fillStyle = '#000';
    ctx.fillText('Иван', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + BAR_HEIGHT + GAP);
    ctx.fillRect(110, 80, 400, 20);

    ctx.fillStyle = '#000';
    ctx.fillText('Бишоп', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (BAR_HEIGHT + GAP) * 2);
    ctx.fillRect(110, 120, 370, 20);
};

