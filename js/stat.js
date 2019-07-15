'use strict'

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff');

    ctx.fillStyle = '#000';
    ctx.fillText('Вы', 110, 35);
    ctx.fillRect(110, 40, 400, 20);

    ctx.fillStyle = '#000';
    ctx.fillText('Иван', 110, 75);
    ctx.fillRect(110, 80, 400, 20);

    ctx.fillStyle = '#000';
    ctx.fillText('Бишоп', 110, 115);
    ctx.fillRect(110, 120, 370, 20);
};

