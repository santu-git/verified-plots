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
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoic2FudHVtYXAiLCJhIjoiY2lyZ2x5bnI5MDE0a2dka3g1dnIwd212cCJ9.vFLHKbovsmq76Y_aagzgLg'
    }).addTo(map);

  }

}
