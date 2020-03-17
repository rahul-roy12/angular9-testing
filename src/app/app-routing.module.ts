import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CutomerListComponent } from './customers/cutomer-list/cutomer-list.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {ActivateGuard} from './activate.guard';
import { MerchantComponent } from './merchant/merchant.component';
import { DeactiveGuard } from './deactive.guard';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent, canActivate:[ActivateGuard]},
  {path:'merchant', component:MerchantComponent, canDeactivate:[DeactiveGuard]},
  { path:'student', component:StudentComponent},
  { path:'cp', component:CounterParentComponent},
  { path:'view-details/:id', component:ViewDetailsComponent},
  {path:'student-details', component:StudentdetailsComponent},
  {path:'customers/customers-list', component:CutomerListComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
