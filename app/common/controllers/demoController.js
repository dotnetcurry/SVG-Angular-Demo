(function () {
    'use strict';
    angular.
        module("svgDemo").
        controller("demoController", demoController);

    demoController.$inject = [];

    function demoController() {
        var demo = this;

        function init() {
            demo.xAxis = 0;
            demo.yAxis = 0;
            demo.rectHeight = 50;
            demo.rectWidth = 50;
        }

        init();
    }
}());