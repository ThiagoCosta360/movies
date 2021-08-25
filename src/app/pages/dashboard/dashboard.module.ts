import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NbMenuModule } from '@nebular/theme';



@NgModule({
	declarations: [
		DashboardComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		LayoutsModule,
		NbMenuModule,
	]
})
export class DashboardModule { }
