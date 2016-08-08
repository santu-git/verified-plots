import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteParams } from '@angular/router-deprecated';

import { MenuComponent } from '../menu/menu.component';
import { PropertyService } from "../property.service";

declare let L: any;
@Component({
  moduleId: module.id,
  selector: 'app-result',
  templateUrl: 'result.component.html',
  styleUrls: ['result.component.css'],
  directives: [MenuComponent],
  providers: [PropertyService]
})
export class ResultComponent implements OnInit {

  locality: string;
  latitude: string;
  longitude: string;
  properties: any;
  error: any;
  errorMessage: string;
  map: any
  constructor(private _routeParams: RouteParams, private _propertyService: PropertyService){}

  ngOnInit() {
    this.locality = this._routeParams.get('locality');
    this.latitude = this._routeParams.get('latitude');
    this.longitude = this._routeParams.get('longitude');
    this.map = L.map('map-ui', {
      center: [this.latitude,this.longitude],
      zoom: 13
    });
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //   maxZoom: 18,
    //   id: 'mapbox.streets',
    //   accessToken: 'pk.eyJ1Ijoic2FudHVtYXAiLCJhIjoiY2lyZ2x5bnI5MDE0a2dka3g1dnIwd212cCJ9.vFLHKbovsmq76Y_aagzgLg'
    // }).addTo(this.map);
    var googleLayer = new L.Google('ROADMAP');
    this.map.addLayer(googleLayer);
   //alert(this._propertyService.getServiceName());
   this._propertyService.getPropertiesByLocality(this.locality)
     .subscribe(
         response=>this.handleResponse(response),
         error => this.errorMessage = <any>error);

    }

    private handleResponse(response: any){
      this.properties = response;
      L.Icon.Default.imagePath = 'public/markers';
      for(var property in this.properties){
        L.marker([this.longitude,this.latitude]).addTo(this.map);
      }
    }

}
