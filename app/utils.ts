// Miscellaneous utilities

import {Injectable} from 'angular2/core';
import {Headers} from 'angular2/http';

@Injectable()
export class Utils {
  // Super easy access to different types of headers
  headers: any = { 
    www: {headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})}
  };

  constructor() {
  }

  // Convert an object to url encoded parameters. I couldn't find how to do this in Angular2
  params(o: Object): string {
    var data = [];
    for (var key in o) {
      var value = o[key];
      value = value? encodeURIComponent(value) : '';
      data.push(key + '=' + value); 
    }
    return data.join('&');
  }
}
