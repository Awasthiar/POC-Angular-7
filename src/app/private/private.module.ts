import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Forms module
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { PrivateRoutingModule } from './private-routing.module';
//Components
import { BookingsComponent } from './bookings/bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FAQsComponent } from './faqs/faqs.component';
//AuthGuard for private route
import { AuthPrivateGuard } from '../auth/auth-private.guard';





@NgModule({
  declarations: [ProfileComponent,NavbarComponent, BookingsComponent,FAQsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrivateRoutingModule
  ],
  providers:[AuthPrivateGuard]
})
export class PrivateModule { }
