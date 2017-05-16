
import { appComponent } from './app.component';
import { toolHeaderComponent } from './components/tool-header/tool-header.component';
import { unorderedListComponent } from './components/unordered-list/unordered-list.component';
import { colorFormComponent } from './components/color-form/color-form.component';

export var appModule = angular.module('App', [])
    .directive(appComponent[0], appComponent[1])
    .directive(toolHeaderComponent[0], toolHeaderComponent[1])
    .directive(unorderedListComponent[0], unorderedListComponent[1])
    .directive(colorFormComponent[0], colorFormComponent[1]);
