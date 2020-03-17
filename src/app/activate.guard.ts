import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service'

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {

  constructor (private userService:UserService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userService.isAdminValid()){
      return true;
    }else{
       alert('You are not authrized to access this page');
      this.router.navigate(['home']);     
    }
  }
  
}
