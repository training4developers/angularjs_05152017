import { appComponent } from './app.component';

export var appModule = angular.module('App', [])
    .filter('mySort', function() {
    
        return function(list) {
            console.log('doing list sort');
            list.sort();
            return list;
        };

    })
    .directive(appComponent[0], appComponent[1]);
