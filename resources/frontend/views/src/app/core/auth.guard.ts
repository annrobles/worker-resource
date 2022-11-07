import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Roles } from '../models/user-access-type.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedUserRoles = this.getRoutePermissions(route);
    return this.checkPermission(allowedUserRoles);
  }

  public canLoad(): boolean  {
    return this.checkPermission([]);
  }

  private getRoutePermissions(route: ActivatedRouteSnapshot): Roles[] {
    if (route.data && route.data['userRoles']) {
      return route.data['userRoles'] as Roles[];
    }
    return [];
  }

  private checkPermission(allowedUserRoles: Roles[]): boolean {
    if (this.authService.isLoggedIn()) {
      if (this.authService.areUserRolesAllowed([this.authService.getUserRole()], allowedUserRoles)) {
        return true;
      } else {
        this.router.navigateByUrl('/');
      return false;
      }
    } else {
      this.router.navigateByUrl('/');
    }
    return false;
  }
}
