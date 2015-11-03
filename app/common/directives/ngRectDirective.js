(function () {
    'use strict';
    angular.
        module("svgDemo").
        directive("ngRect", ngRect);

    ngRect.$inject = [];

    function ngRect() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                xAxis: '=',
                yAxis: '=',
                rectHeight: '=',
                rectWidth: '='
            },
            templateUrl: 'app/common/templates/rectTemplate.html',
            templateNamespace: 'svg'
        };
    }
}());