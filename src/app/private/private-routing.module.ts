import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookingsComponent } from './bookings/bookings.component';
import {FAQsComponent} from './faqs/faqs.component';
import { AuthPrivateGuard } from '../auth/auth-private.guard';



const routes: Routes = [
  {path:'navbar', component:NavbarComponent,
   children:[
    {path:'profile', component:ProfileComponent,canActivate:[AuthPrivateGuard]},
    {path:'bookings', component:BookingsComponent},
    {path:'faqs', component:FAQsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class PrivateRoutingModule { }
