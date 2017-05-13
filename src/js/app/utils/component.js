export const componentHelper = (componentOptions) => {

    const componentDefaults = {
        restrict: 'E',
        scope: {},
        controller: class { },
        controllerAs: '$ctrl',
        bindToController: true,
        link: (...params) => {

            if (typeof componentOptions.$postLink === 'function') {
                componentOptions.$postLink(...params);
            }

        },
    };

    return () => angular.extend({}, componentDefaults, componentOptions);
};