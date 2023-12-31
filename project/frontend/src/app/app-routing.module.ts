import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SearchStreetComponent} from "./components/search-street/search-street.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'streets', component: SearchStreetComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
