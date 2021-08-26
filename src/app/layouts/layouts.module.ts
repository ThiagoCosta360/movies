import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuLayoutComponent } from './side-menu-layout/side-menu-layout.component';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { NbActionsModule, NbCardModule, NbContextMenuModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
	declarations: [
		SideMenuLayoutComponent,
		CardLayoutComponent,
		HeaderComponent,
		FooterComponent,
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
		NbActionsModule,
		NbSearchModule,
		NbFormFieldModule,
		NbInputModule,
	],
	exports: [
		SideMenuLayoutComponent,
		CardLayoutComponent
	]
})
export class LayoutsModule { }
