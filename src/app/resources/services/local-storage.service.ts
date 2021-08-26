import { Injectable } from '@angular/core';
import { base64, decrypt, encrypt } from '../utils/crypto-methods';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public keys = {
		TOKEN: 'token',
		USER_ID: 'user_id',
		USER: 'user',
		FEATURES: 'features',
		EMAIL: 'email',
		THEME: 'theme',
		LANGUAGE: 'language',
	};

	public set(key: string, item: string): void {
		this.setItem(key, item);
	}

	public get(key: string): string {
		return this.has(key) ? this.getItem(key) : '';
	}

	public has(key: string): boolean {
		return 	!!localStorage.getItem(base64(key));
	}

	private getItem(key: any): string {
		return decrypt(localStorage.getItem(base64(key)));
	}

	private setItem(key: any, value: any): void {
		localStorage.setItem(base64(key), encrypt(value));
	}

	public delete(key: string): void {
		localStorage.removeItem(base64(key));
	}

	public clearAll(): void {
		localStorage.clear();
	}
}
