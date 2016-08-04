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
  private seletedData: string;
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
    this.dataService = completerService.local(this.searchData, 'color', 'color');
  }
  public locationSelection(selected: CompleterItem) {
    this.seletedData = selected.originalObject.color;
  }
  navigateResult(){
    this._router.navigate(['Result',{location: this.seletedData}]);
  }

  ngOnInit() {
  }

}
