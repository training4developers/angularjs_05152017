import { appComponent } from './app.component';

export const appModule = angular.module('App', [])
    .directive(...appComponent);
