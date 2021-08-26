import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor (
		protected readonly storageService: LocalStorageService,
		private readonly router: Router,
	) { }

	get user(): string {
		return this.storageService.get(this.storageService.keys.USER);
	}

	public isLogged(): boolean {
		return this.storageService.has(this.storageService.keys.USER);
	}

	public login(userName: string): void {
		this.storageService.set(this.storageService.keys.USER, userName);
		this.router.navigate(['']);
	}

	public logout(): void {
		this.storageService.delete(this.storageService.keys.USER);
		this.router.navigate(['auth']);
	}

}
