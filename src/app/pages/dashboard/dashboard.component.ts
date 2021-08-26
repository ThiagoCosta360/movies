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
			title: 'CARD ROTATIVO',
			link: 'rotation',
			icon: 'undo-outline',
			home: true
		},
		{
			title: 'CARROSSEL',
			link: 'carousel',
			icon: 'swap-outline',
		},
		{
			title: 'LISTA',
			link: 'list',
			icon: 'list-outline'
		}
	];
}
