import 'zone.js'; // Sinon angular ne marche pas...

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.mod';

platformBrowserDynamic().bootstrapModule(AppModule);