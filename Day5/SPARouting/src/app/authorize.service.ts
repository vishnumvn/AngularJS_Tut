import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor() { }

  isUserAuthorized(reqURL) {
    const result = new Observable<boolean>();
    console.log(reqURL);
    if (reqURL === '/umpire' || reqURL.toString().includes('sponsors') ) {
      return false;
    } else {
      return true;
    }
  }
}
