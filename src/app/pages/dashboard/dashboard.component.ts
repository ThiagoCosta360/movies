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
			title: 'CARROSSEL',
			link: 'carousel',
			icon: 'swap-outline',
			home: true
		},
		{
			title: 'LISTA',
			link: 'list',
			icon: 'list-outline'
		}
	];
}
