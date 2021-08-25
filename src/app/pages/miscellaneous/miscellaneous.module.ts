import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

@NgModule({
	declarations: [
		NotFoundComponent,
		MiscellaneousComponent,
		ServerErrorComponent,
	],
	imports: [
		NbCardModule,
		NbButtonModule,
		MiscellaneousRoutingModule,
	],
})
export class MiscellaneousModule { }
