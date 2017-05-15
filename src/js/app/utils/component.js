export var componentHelper = function(componentOptions) {

    var componentDefaults = {
        restrict: 'E',
        scope: {},
        controller: function () { },
        controllerAs: '$ctrl',
        bindToController: true,
        link: function(scope, element, attrs, ctrls, transclude) {

            if (typeof componentOptions.$postLink === 'function') {
                componentOptions
                    .$postLink(scope, element, attrs, ctrls, transclude);
            }

        },
    };

    return function() {
        return angular.extend({}, componentDefaults, componentOptions);
    };
};