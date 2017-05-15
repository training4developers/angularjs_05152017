// import { componentHelper } from './utils/component';


// black, white, red, green, saffron, blue


function AppComponent() {

    var vm = this;

    vm.message = 'Hello World!';
    vm.newColor = '';

    vm.colors = [ 'black', 'white', 'red', 'green', 'saffron', 'blue' ];

    vm.addColor = function() {
        vm.colors.push(vm.newColor);    
    };
}

export var appComponent = [ 'main', function() {
    
    return {
        restrict: 'E',
        templateUrl: 'app/app.component.html',
        controller: AppComponent,
        controllerAs: '$ctrl',
    };
} ];