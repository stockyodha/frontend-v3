import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
    children:[
      {
        path:'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
      },
      {
        path:'stock',
        loadComponent: () => import('./stock/stock.component').then(m => m.StockComponent)
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      }
    ]
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
