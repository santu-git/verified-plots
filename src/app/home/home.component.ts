import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';
import { CompleterCmp, CompleterService, CompleterData, CompleterItem, COMPLETER_DATA_PROVIDERS } from 'ng2-completer';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [CompleterCmp,ROUTER_DIRECTIVES],
  providers: [COMPLETER_DATA_PROVIDERS, CompleterService]
})
export class HomeComponent implements OnInit {
  private selectedLocality: string;
  private latitude: string;
  private longitude: string;
  private searchStr: string;
  private dataService: CompleterData;
  private searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' }
  ];

  constructor(private completerService: CompleterService, private _router: Router) {
    this.dataService = completerService.remote("http://138.201.134.48:3005/localities.json?search=", 'name', 'name');
  }
  public localitySelection(selected: CompleterItem) {
    console.log(selected.originalObject);
    this.selectedLocality = selected.originalObject.permalink;
    this.latitude = selected.originalObject.latitude;
    this.longitude = selected.originalObject.longitude
  }
  navigateResult(){
    this._router.navigate(['Result',{locality: this.selectedLocality, latitude: this.latitude, longitude: this.longitude}]);
  }

  ngOnInit() {
  }

}
