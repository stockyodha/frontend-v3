import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { HeaderLayoutComponent } from './layout/header-layout/header-layout.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DynamicPipe } from './pipe/dynamic.pipe';

const COMMON_COMPONENTS = [
  HeaderComponent,
  HeaderLayoutComponent,
  SidebarComponent,
];

const PIPE = [DynamicPipe];

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [...COMMON_COMPONENTS, ...PIPE],
  declarations: [...COMMON_COMPONENTS, ...PIPE],
  providers: [DecimalPipe, CurrencyPipe, DatePipe],
})
export class CoreModule {}
