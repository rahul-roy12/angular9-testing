import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantComponent } from './merchant/merchant.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<MerchantComponent> {
  canDeactivate():boolean {
    return window.confirm("Are you sure want to leave?");
  }
  
}
