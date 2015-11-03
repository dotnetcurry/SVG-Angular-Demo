(function () {
    'use strict';
    angular.
        module("svgDemo").
        directive("ngDemo", ngSvgDemo);

    ngSvgDemo.$inject = [];

    function ngSvgDemo() {
        return {
            restrict: 'E',
            templateUrl: 'app/common/templates/demoTemplate.html',
            controller: 'demoController',
            controllerAs: 'demo'
        };
    }
}());