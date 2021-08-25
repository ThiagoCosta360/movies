import { Component } from '@angular/core';
import { NbMenuService } from '@nebular/theme';

@Component({
	selector: 'app-not-found',
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent {
	constructor(private menuService: NbMenuService) { }

	goToHome(): void {
		this.menuService.navigateHome();
	}
}
