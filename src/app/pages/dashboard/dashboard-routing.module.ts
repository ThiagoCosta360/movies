import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesResolver } from 'src/app/resources/resolvers/movies.resolver';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
	{ path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'carrossel',
				component: CarouselComponent,
				resolve: { movies: MoviesResolver}
			},
			{
				path: 'list',
				component: ListComponent,
				resolve: { movies: MoviesResolver}
			},
			{
				path: '',
				redirectTo: 'carrossel',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
