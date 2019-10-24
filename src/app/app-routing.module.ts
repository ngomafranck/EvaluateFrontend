import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './hotels/hotels.component'
import {NewHostelComponent} from './new-hostel/new-hostel.component'
const routes: Routes = [
{
  path:"hotels", component: HotelsComponent
},
{
  path:"new-hostel",component:NewHostelComponent
},
{
  path:"",redirectTo:"/hotels",pathMatch:'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
