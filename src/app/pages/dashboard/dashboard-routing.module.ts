import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosselComponent } from './carrossel/carrossel.component';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
	{ path: '',
		component: DashboardComponent,
		children: [
			{
				path: 'carrossel',
				component: CarrosselComponent
			},
			{
				path: 'list',
				component: ListComponent
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
