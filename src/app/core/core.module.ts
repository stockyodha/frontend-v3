import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DynamicPipe } from './pipe/dynamic.pipe';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

const COMMON_COMPONENTS = [
  HeaderComponent,
  SidebarComponent,
  HeaderLayoutComponent,
  FullLayoutComponent,
];

const PIPE = [DynamicPipe];

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [...COMMON_COMPONENTS, ...PIPE],
  declarations: [...COMMON_COMPONENTS, ...PIPE],
  providers: [DecimalPipe, CurrencyPipe, DatePipe],
})
export class CoreModule {}
