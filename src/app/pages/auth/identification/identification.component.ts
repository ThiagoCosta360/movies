import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/resources/services/auth.service';

@Component({
	selector: 'app-identification',
	templateUrl: './identification.component.html',
	styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {
	public name: FormControl

	constructor(
		private authService: AuthService
	) { 
		this.name = new FormControl('', [Validators.required, Validators.minLength(3)]);
	}

	ngOnInit(): void {
	}

	login(): void {
		if (this.name.valid){
			this.authService.login(this.name.value);
		} else {
			this.name.markAsTouched();
		}
	}

}
