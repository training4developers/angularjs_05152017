import { appComponent } from './app.component';

export var appModule = angular.module('App', [])
    .directive(appComponent[0], appComponent[1]);
