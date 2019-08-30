'use strict';

(function () {
 var DATA_URI_PREFIX = 'data:image/svg+xml;charset=utf-8;base64,';

 window.svg2base64 = function (svgElement) {
    var xml = new XMLSerializer().serializeToString(svgElement);
    console.log("1" + xml);

    var svg64 = this.window.btoa(xml);
    console.log("2 " + svg64);

    console.log("3 " + DATA_URI_PREFIX + svg64);

    return DATA_URI_PREFIX + svg64;
 }
})();