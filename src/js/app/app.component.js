// import { componentHelper } from './utils/component';


// black, white, red, green, saffron, blue

function AppComponent($scope) {

    var vm = this;

    vm.message = 'Hello World!';
    vm.newColor = '';

    vm.lastColors = null;
    vm.colors = [ 'black', 'white', 'red', 'green', 'saffron', 'blue' ];

    vm.addColor = function() {
        vm.colors = vm.colors.concat(vm.newColor);    
    };

    vm.sortedColors = function() {
        console.log('get sorted colors');
        if (vm.colors !== vm.lastColors) {
            console.log('sorting colors');
            vm.colors.sort();
            vm.lastColors = vm.colors;
        }
        return vm.colors;
    };

    $scope.$watch(function() {
        console.log('running change detection (digest loop)');
    });
}

export var appComponent = [ 'main', function() {
    
    return {
        restrict: 'E',
        templateUrl: 'app/app.component.html',
        controller: AppComponent,
        controllerAs: '$ctrl',
    };
} ];