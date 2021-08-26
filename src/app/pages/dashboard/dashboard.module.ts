import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { ListComponent } from './list/list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { SwiperModule } from 'swiper/angular';
import { RotationComponent } from './rotation/rotation.component';

@NgModule({
	declarations: [
		DashboardComponent,
		ListComponent,
		CarouselComponent,
		ListItemComponent,
		CarouselItemComponent,
		RotationComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		LayoutsModule,
		NbMenuModule,
		NbCardModule,
		SwiperModule,
	]
})
export class DashboardModule { }
