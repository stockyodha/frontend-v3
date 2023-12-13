import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { StockComponent } from './stock/stock.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    StockComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
