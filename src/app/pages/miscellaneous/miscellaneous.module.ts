import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbLayoutModule } from '@nebular/theme';

import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		NotFoundComponent,
		MiscellaneousComponent,
	],
	imports: [
		NbCardModule,
		NbButtonModule,
		MiscellaneousRoutingModule,
		NbLayoutModule,
	],
})
export class MiscellaneousModule { }
