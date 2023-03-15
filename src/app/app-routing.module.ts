import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'randomlocation', component: LocationComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
