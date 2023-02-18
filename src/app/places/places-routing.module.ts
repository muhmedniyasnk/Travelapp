import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegisterComponent } from '../register/register.component';
import { AllPlacesComponent } from './all-places/all-places.component';
import { CartComponent } from './cart/cart.component';
import { PlacesComponent } from './places.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [

  
  // { path: '', component: PlacesComponent },
  { path:'',component:LoginComponent},
  { path:'Register',component:RegisterComponent},
  { path:'allplace',component:AllPlacesComponent},
  { path: 'cart', component: CartComponent },
  { path: 'wish-list', component: WishListComponent },
  // { path: 'all-places', component: AllPlacesComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule { }
