import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, RouteParams } from '@angular/router-deprecated';

import { MenuComponent } from '../menu/menu.component';

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
  }

}
