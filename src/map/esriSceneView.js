(function(angular) {
    'use strict';

    /**
     * @ngdoc directive
     * @name esri.map.directive:esriSceneView
     * @restrict E
     * @element
     * @scope
     *
     * @description
     * This is the directive which will create a scene view using the Esri ArcGIS API for JavaScript.
     * There are plenty of examples showing how to use this directive and its bound parameters.
     *
     * ## Examples
     * - {@link ../#/examples/scene-view Scene View}
     * - {@link ../#/examples/extrude-polygon Extrude Polygon}
     * - {@link ../#/examples/scene-toggle-elevation Toggle Basemap Elevation}
     * - {@link ../#/examples and more...}
     *
     * @param {Object} map Instance of a Map or WebScene.
     * @param {Function=} on-create Callback for successful creation of the scene view.
     * @param {Function=} on-load Callback for successful loading of the scene view.
     * @param {Function=} on-error Callback for rejected/failed loading of the scene view, for example when WebGL is not supported.
     * @param {Object | String=} view-options An object or inline object hash string defining additional scene view constructor options.
     * @param {String=} register-as A name to use when registering the view so that it can be used by other controllers.
     *  See {@link esri.core.factory:esriRegistry esriRegistry}.
     */
    angular.module('esri.map')
        .directive('esriSceneView', function esriSceneView() {
            return {
                // element only
                restrict: 'E',

                transclude: true,

                // isolate scope
                scope: {
                    // one-way binding
                    registerAs: '@?',
                    // two-way binding
                    map: '=?',
                    // function binding for event handlers
                    onCreate: '&',
                    onLoad: '&',
                    onError: '&',
                    // function binding for reading object hash from attribute string
                    // or from scope object property
                    viewOptions: '&'
                },

                template: '<div ng-transclude></div>',

                controllerAs: 'sceneViewCtrl',

                bindToController: true,

                // directive api
                controller: 'EsriSceneViewController',
                link: function esriSceneViewLink(scope, element, attrs, controller) {
                    scope.$watch('sceneViewCtrl.map', function(newVal) {
                        controller.setMap(newVal);
                    });
                }
            };
        });
})(angular);
