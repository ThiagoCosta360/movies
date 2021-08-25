import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

const routes: Routes = [
	{
		path: '',
		component: MiscellaneousComponent,
		children: [
			{
				path: '404',
				component: NotFoundComponent,
			},
			{
				path: '500',
				component: ServerErrorComponent,
			},
			{
				path: '',
				redirectTo: '404',
				pathMatch: 'full',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MiscellaneousRoutingModule {
}
