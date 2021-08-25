import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'auth',
		loadChildren: () => import('./pages/auth/auth.module')
			.then(m => m.AuthModule)
			.catch(error => console.error(error))
	},
	{
		path: '',
		loadChildren: () => import('./pages/dashboard/dashboard.module')
			.then(m => m.DashboardModule)
			.catch(error => console.error(error))
	},
	{
		path: 'error',
		loadChildren: () =>
			import('./pages/miscellaneous/miscellaneous.module')
				.then((m) => m.MiscellaneousModule)
				.catch((err) => {
					console.error(err);
				}),
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: 'error',
	}
];
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
