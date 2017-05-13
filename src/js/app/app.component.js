import { componentHelper } from './utils/component';

class AppComponent {
    message = 'Hello World!';
}

export const appComponent = [ 'main', componentHelper({
    templateUrl: 'app/app.component.html',
    controller: AppComponent,
}) ];