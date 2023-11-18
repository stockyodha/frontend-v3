import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    HomeComponent,
    StockComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
