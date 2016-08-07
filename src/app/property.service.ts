import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PropertyService {

  constructor(private _http: Http) { }

  getPropertiesByLocality(locality: string): Observable<any>{
    return this._http.get("http://138.201.134.48:3005/properties.json?locality="+locality)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log("hi");
    let body = res.json();
    
    return body || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
