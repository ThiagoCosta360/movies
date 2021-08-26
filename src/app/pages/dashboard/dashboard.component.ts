import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
	menu: NbMenuItem[] = [
		{
			title: 'carrosel',
			link: 'carrossel',
			icon: 'swap-outline',
			home: true
		},
		{
			title: 'list',
			link: 'list',
			icon: 'list-outline'
		}
	];
}
