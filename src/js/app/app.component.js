// import { componentHelper } from './utils/component';

function AppComponent() {
    this.message = 'Hello World!';
}

export var appComponent = [ 'main', function() {
    
    return {
        restrict: 'E',
        templateUrl: 'app/app.component.html',
        controller: AppComponent,
        controllerAs: '$ctrl',
    };
} ];