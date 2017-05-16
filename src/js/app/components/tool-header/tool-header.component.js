import { componentHelper } from '../../utils/component';

export var toolHeaderComponent = [ 'toolHeader', componentHelper({
    template: require('./tool-header.component.html'),
    bindings: {
        // input binding
        headerText: '=myHeaderText',
    },
}) ];