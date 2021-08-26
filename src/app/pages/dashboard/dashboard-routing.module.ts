import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesResolver } from 'src/app/resources/resolvers/movies.resolver';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';
import { RotationComponent } from './rotation/rotation.component';

const routes: Routes = [
	{ path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'rotation',
				component: RotationComponent,
				resolve: { movies: MoviesResolver}
			},
			{
				path: 'carousel',
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
				redirectTo: 'rotation',
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
