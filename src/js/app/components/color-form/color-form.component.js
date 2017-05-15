

export var colorFormComponent = [ 'colorForm', function() {

    // directive definition object
    return {

        restrict: 'E',
        template: require('./color-form.component.html'),
        controller: function() { },
        controllerAs: '$ctrl',
        bindToController: true,
        scope: {
            // output binding
            submitColor: '&',
        },
    };

} ];