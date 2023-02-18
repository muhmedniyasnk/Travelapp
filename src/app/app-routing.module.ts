import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllPlacesComponent } from './places/all-places/all-places.component';
import { PlacesModule } from './places/places.module';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', redirectTo:'/AppModule',pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./app.module').then(m => m.AppModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    PlacesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
