import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
import { AuthService } from 'src/app/resources/services/auth.service';


@Component({
	selector: 'app-user-dropdown',
	templateUrl: './user-dropdown.component.html',
	styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
	public user: string
	public items: NbMenuItem[] = [
		{ title: 'Profile',
			icon: 'person-outline'
		},
		{ title: 'Logout',
			icon: 'log-out-outline'
		},
	];

	constructor(
		private nbMenuService: NbMenuService, 
		private authService: AuthService
	) {
		this.user = authService.user;
	}
	
	ngOnInit(): void {
		this.nbMenuService.onItemClick()
			.pipe(
				filter(({ tag }) => tag === 'my-context-menu'),
				map(({ item: { title } }) => title),
			)
			.subscribe(title => {
				console.log(title);
				switch(title){
				case 'Logout':
					this.authService.logout();
				}
			});
	}
}
	