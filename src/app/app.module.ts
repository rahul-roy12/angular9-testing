import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import {BookService} from './book.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {Testdata} from './testdata';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { MerchantComponent } from './merchant/merchant.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { CounterComponent } from './counter/counter.component';
import { CounterParentComponent } from './counter-parent/counter-parent.component';
//import {Approutes} from './routing';

@NgModule({   
  declarations: [ 
    AppComponent,
    MypipePipe,
    StudentComponent,
    StudentdetailsComponent,
    AdminComponent,
    MerchantComponent,
    ViewDetailsComponent,
    CounterComponent,
    CounterParentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(Testdata)
  ],
  providers: [BookService,ActivateGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
