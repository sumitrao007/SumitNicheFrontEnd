import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"sign-up",component:SignupComponent
  },
  {
    path:"adminDashboard",component:AdmindashboardComponent
  },
  {
    path:"addProduct",component:AddproductComponent
  },
  {
    path:"updateProduct/:id",component:UpdateComponent
  },
  {
    path:"**",component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
