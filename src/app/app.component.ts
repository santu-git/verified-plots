import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams, RouteConfig } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES,HomeComponent]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/result', name: 'Result', component: ResultComponent}
])
export class AppComponent {
  title = 'app works!';
}
