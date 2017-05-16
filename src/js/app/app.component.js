import { componentHelper } from './utils/component';

function AppComponent() {

    var vm = this;

    vm.headerText = 'Color Tool';

    vm.lastColors = null;
    vm.colors = [ 'black', 'white', 'red', 'green', 'saffron', 'blue' ];

    vm.addColor = function(newColor) {
        vm.colors = vm.colors.concat(newColor);    
    };

    vm.sortedColors = function() {
        if (vm.colors !== vm.lastColors) {
            vm.colors.sort();
            vm.lastColors = vm.colors;
        }
        return vm.colors;
    };

}

export var appComponent = [ 'main', componentHelper({
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
}) ];