import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuLayoutComponent } from './side-menu-layout/side-menu-layout.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { NbCardModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { ThemeChangerComponent } from './components/theme-changer/theme-changer.component';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';



@NgModule({
	declarations: [
		SideMenuLayoutComponent,
		CardLayoutComponent,
		HeaderComponent,
		ThemeChangerComponent,
		UserDropdownComponent
	],
	imports: [
		CommonModule,
		NbLayoutModule,
		NbMenuModule,
		NbSidebarModule,
		NbIconModule,
		NbEvaIconsModule,
		NbUserModule,
		NbContextMenuModule,
		NbCardModule,
	],
	exports: [
		SideMenuLayoutComponent,
		CardLayoutComponent
	]
})
export class LayoutsModule { }
