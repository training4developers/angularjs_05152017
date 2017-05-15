import { appComponent } from './app.component';
import { toolHeaderComponent } from './components/tool-header/tool-header.component';

export var appModule = angular.module('App', [])
    .directive(appComponent[0], appComponent[1])
    .directive(toolHeaderComponent[0], toolHeaderComponent[1]);
