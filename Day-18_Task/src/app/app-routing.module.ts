import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent} from './base/login/login.component';
import{RegisterComponent} from  './base/register/register.component';
import { UserTableComponent } from './base/user-table/user-table.component';
import { FirstViewComponent } from './first-view/first-view.component';
import { BaseComponent } from './base/base.component';
const routes: Routes = [
  {path:'',component : FirstViewComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Login-page",component:UserTableComponent},
  {path:"cardview",component :BaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
