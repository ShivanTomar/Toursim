import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { LoginComponent } from './header/top-menu/login/login.component';
import { RegistrationComponent } from './header/top-menu/registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BookingComponent } from './container/product-list/booking/booking.component';
import { ForgotPasswordComponent } from './header/top-menu/login/forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'booking',component:BookingComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'footer',component:FooterComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
