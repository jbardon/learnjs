import {Component, VERSION} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>{{message}}</h1>`,
})
export class App {
    message:string = `Hello from Angular ${VERSION.full}`;
}