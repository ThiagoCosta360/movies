import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
	providedIn: 'root',
})
export class GuestGuard implements CanActivateChild {
	constructor(
		private readonly router: Router,
		private readonly authService: AuthService,
	) {}

	canActivateChild(): boolean {
		const isLogged = this.authService.isLogged();

		if (isLogged) {
			this.router.navigate(['']);
		}

		return !isLogged;
	}
}
