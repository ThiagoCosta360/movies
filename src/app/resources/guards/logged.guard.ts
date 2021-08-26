import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
// TODO: remove request Service
export class LoggedGuard implements CanActivateChild {
	constructor(
		private readonly router: Router,
		private readonly authService: AuthService,
	) {}
	canActivateChild(): boolean {
		const isLogged = this.authService.isLogged();

		if (!isLogged) {
			this.router.navigate(['auth']);
		}

		return isLogged;
	}
}
