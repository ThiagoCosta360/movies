import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './resources/guards/guest.guard';
import { LoggedGuard } from './resources/guards/logged.guard';

const activateForGuests = [GuestGuard];
const activateForLoggeds = [LoggedGuard];


const routes: Routes = [
	{
		path: 'auth',
		canActivateChild: activateForGuests,
		loadChildren: () => import('./pages/auth/auth.module')
			.then(m => m.AuthModule)
			.catch(error => console.error(error))
	},
	{
		path: '',
		canActivateChild: activateForLoggeds,
		loadChildren: () => import('./pages/dashboard/dashboard.module')
			.then(m => m.DashboardModule)
			.catch(error => console.error(error))
	},
	{
		path: 'error',
		canActivateChild: activateForLoggeds,
		loadChildren: () =>
			import('./pages/miscellaneous/miscellaneous.module')
				.then(m => m.MiscellaneousModule)
				.catch(error => console.error(error)),
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
