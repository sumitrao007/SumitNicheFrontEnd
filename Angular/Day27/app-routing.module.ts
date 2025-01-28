import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemotdfComponent } from './demotdf/demotdf.component';

const routes: Routes = [
    {
      path:"",component:HomeComponent
    },
    {
      path:"page1",component:Page1Component
    },
    {
      path:"page2/:id",component:Page2Component
    },
    {
      path:"follower",component:FollowerComponent
    },
    {
      path:"myfollower",component:MyfollowerComponent
    },
    {
      path:"tdf",component:DemotdfComponent
    },
    {
      path:"**",component:NotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
