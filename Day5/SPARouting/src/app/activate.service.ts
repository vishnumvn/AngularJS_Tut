import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizeService } from './authorize.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateService implements CanActivate {

  constructor(private service: AuthorizeService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    const requestURL = state.url;

    const pathParam = route.params['type'];
    console.log(pathParam);

    if (this.service.isUserAuthorized(requestURL)) {
      return true;
    } else {
      this.router.navigateByUrl('/error');
    }
    return this.service.isUserAuthorized(requestURL);
  }

}
