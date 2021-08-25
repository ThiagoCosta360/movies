import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { AuthModule } from './pages/auth/auth.module';
import { MiscellaneousModule } from './pages/miscellaneous/miscellaneous.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NbThemeModule.forRoot({ name: 'default' }),
		NbSidebarModule.forRoot(),
		NbMenuModule.forRoot(),
		AuthModule,
		DashboardModule,
		MiscellaneousModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
