import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import "angular2-materialize";
import 'leaflet';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

//For ng2-completer
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,disableDeprecatedForms(),provideForms()]);
