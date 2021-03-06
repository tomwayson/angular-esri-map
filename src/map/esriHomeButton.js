(function(angular) {
    'use strict';

    /**
     * @ngdoc directive
     * @name esri.map.directive:esriHomeButton
     * @restrict E
     * @element
     * @scope
     *
     * @description
     * This is the directive which will create a home button using the Esri ArcGIS API for JavaScript.
     *
     * ## Examples
     * - {@link ../#/examples/home-button Home Button}
     *
     * @param {Object} view Instance of a MapView or SceneView.
     */
    angular.module('esri.map')
        .directive('esriHomeButton', function esriHomeButton() {
            return {
                // element only
                restrict: 'E',

                // isolate scope
                scope: {
                    view: '='
                },

                template: [
                    '<div class="esri-home" role="presentation">',
                    '  <div role="button" tabindex="0" class="esri-container">',
                    '    <span aria-hidden="true" class="esri-icon esri-icon-home"></span>',
                    '    <span class="esri-icon-font-fallback-text">Home</span>',
                    '  </div>',
                    '</div>'
                ].join(''),

                controllerAs: 'homeButtonCtrl',

                bindToController: true,

                // directive api
                controller: 'EsriHomeButtonController',

                link: function esriHomeButtonLink(scope, element, attrs, controller) {
                    scope.$watch('homeButtonCtrl.view', function(newVal) {
                        controller.setView(newVal);
                    });

                    element.on('click', function() {
                        controller.goHome();
                    });
                }
            };
        });
})(angular);
