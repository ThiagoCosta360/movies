import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { ReplaySubject } from 'rxjs';
import { LocalStorageService } from 'src/app/resources/services/local-storage.service';

@Component({
	selector: 'app-theme-changer',
	templateUrl: './theme-changer.component.html',
	styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {
	private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1)
	
	public currentIcon = '';

	constructor(
		private themeService: NbThemeService,
		private readonly storage: LocalStorageService,
	) { }

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

	ngOnDestroy(): void {
		this.destroyed$.next(true);
		this.destroyed$.complete();
	}

}
