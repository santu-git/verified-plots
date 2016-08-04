import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteParams } from '@angular/router-deprecated';

import { MenuComponent } from '../menu/menu.component';

declare let L: any;
@Component({
  moduleId: module.id,
  selector: 'app-result',
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.css'],
  directives: [MenuComponent]
})
export class ResultComponent implements OnInit {

  location: string;
  constructor(private _routeParams: RouteParams){}

  ngOnInit() {
    this.location = this._routeParams.get('location');
    var map = L.map('map-ui', {
      center: [51.505, -0.09],
      zoom: 13
    });
  }

}
