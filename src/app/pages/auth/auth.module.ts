import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificationComponent } from './identification/identification.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';



@NgModule({
	declarations: [
		IdentificationComponent,
		AuthComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		LayoutsModule,
	]
})
export class AuthModule { }
