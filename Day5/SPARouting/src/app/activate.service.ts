import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateService implements CanActivate {

  constructor(private service: AuthorizeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const requestURL = state.url;

    const pathParam = route.params['type'];
    console.log(pathParam);

    return this.service.isUserAuthorized(requestURL);
  }

}
