import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AuthPublicGuard } from '../auth/auth-public.guard';

const routes: Routes = [
  {path:'', component:RegisterComponent,canActivate:[AuthPublicGuard]},
  {path:'login', component:LoginComponent,canActivate:[AuthPublicGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
