

export var toolHeaderComponent = [ 'toolHeader', function() {

    // directive definition object
    return {

        restrict: 'E',
        template: require('./tool-header.component.html'),
        controller: function() { },
        controllerAs: '$ctrl',
        bindToController: true,
        scope: {
            // input binding
            headerText: '=myHeaderText',
        },
    };

} ];