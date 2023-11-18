import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './helper/auth.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    canActivate: [authGuard],
    loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
