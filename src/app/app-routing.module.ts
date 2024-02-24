import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from 'konva/lib/shapes/Path';
import { ClientsComponent } from './src/catalogs/ClientsCatalogs/clients.component';
import { DashboardComponent } from './src/mainpage/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'Clients',component:ClientsComponent},
  {path:'Dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
