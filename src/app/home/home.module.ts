import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Forms module
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
//Routing module for feature module
import { HomeRoutingModule } from './home-routing.module';
//Components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthPublicGuard } from '../auth/auth-public.guard';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[AuthPublicGuard]
})
export class HomeModule {}

