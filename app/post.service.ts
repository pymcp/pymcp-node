import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Utils} from './utils';

@Injectable()
export class PostService {
  constructor(public http: Http, public utils: Utils) {
  }
  
  getPosts() {
    return this.http.get('/posts') 
  }

  newPost(subject, message) {
    var params = {subject: subject, message: message};
    this.http.put('/posts', this.utils.params(params), this.utils.headers.www) 
      .subscribe(
        res => res.json(),
        error => console.log(error)
      );
  }
}
