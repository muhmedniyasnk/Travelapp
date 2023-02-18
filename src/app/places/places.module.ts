import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlacesRoutingModule } from './places-routing.module';
import { PlacesComponent } from './places.component';
import { AllPlacesComponent } from './all-places/all-places.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    PlacesComponent,
    AllPlacesComponent,
    CartComponent,
    WishListComponent,
    FilterPipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PlacesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class PlacesModule { }
