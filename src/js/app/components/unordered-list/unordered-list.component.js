

export var unorderedListComponent = [ 'unorderedList', function() {

    // directive definition object
    return {

        restrict: 'E',
        template: require('./unordered-list.component.html'),
        controller: function() {

            this.items.push('new item');


        },
        controllerAs: '$ctrl',
        bindToController: true,
        scope: {
            items: '=',
        },
    };

} ];