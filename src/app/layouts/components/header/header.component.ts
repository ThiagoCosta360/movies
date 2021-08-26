import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NbMenuItem, NbMenuService, NbSearchService, NbThemeService } from '@nebular/theme';
import { AuthService } from 'src/app/resources/services/auth.service';
import { LocalStorageService } from 'src/app/resources/services/local-storage.service';
import { filter, map } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@Output() toggleSidebar = new EventEmitter<void>()
	public currentIcon = '';
	public search = ''
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
	private readonly themeService: NbThemeService,
	private readonly storage: LocalStorageService,
	private readonly nbMenuService: NbMenuService, 
	private readonly authService: AuthService,
	private readonly searchService: NbSearchService
	) {
		this.user = authService.user;
		
		this.subscribeSearch();
		this.subscribeMenu();
	}

	private subscribeMenu(): void {
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

	private subscribeSearch(): void {
		this.searchService.onSearchSubmit()
			.subscribe(
				(search) => {
					this.search = search.term;
				},
				(error) => console.error(error)
			);
	}

	public openSearch(): void {
		this.searchService.activateSearch('');
	}
		
	ngOnInit(): void {
		let currentTheme = this.themeService.currentTheme;
			
		if (this.storage.has(this.storage.keys.THEME)) {
			const storageTheme = this.storage.get(this.storage.keys.THEME);
			if (storageTheme !== currentTheme) {
				this.themeService.changeTheme(storageTheme);
				currentTheme=storageTheme;
			}
		} else {
			this.storage.set(this.storage.keys.THEME, currentTheme);
		}
		this.currentIcon = currentTheme === 'dark' ? 'sun' : 'moon';
	}
		
		
	toggleTheme(): void {
		let currentTheme = this.themeService.currentTheme;
			
		currentTheme = currentTheme === 'dark' ? 'corporate' : 'dark';
		this.currentIcon = currentTheme === 'dark' ? 'sun' : 'moon';
			
		this.storage.set(this.storage.keys.THEME, currentTheme);
		this.themeService.changeTheme(currentTheme);
	}
		
		
}
	