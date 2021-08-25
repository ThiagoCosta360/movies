import { Component, Input } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
	selector: 'app-side-menu-layout',
	templateUrl: './side-menu-layout.component.html',
	styleUrls: ['./side-menu-layout.component.scss']
})
export class SideMenuLayoutComponent {
	@Input() menu!: NbMenuItem[]

}
