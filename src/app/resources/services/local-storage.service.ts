import { Injectable } from '@angular/core';
// import { base64, decrypt, encrypt } from '../utils/crypto-methods';

@Injectable({
	providedIn: 'root',
})
export class LocalStorageService {
	public keys = {
		USER: 'user',
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
		return 	!!localStorage.getItem((key));
	}

	private getItem(key: any): string {
		let returnitem
		returnitem = localStorage.getItem((key))
		if (!returnitem) returnitem=''
		return returnitem;
	}

	private setItem(key: any, value: any): void {
		localStorage.setItem((key), (value));
	}

	public delete(key: string): void {
		localStorage.removeItem((key));
	}

	public clearAll(): void {
		localStorage.clear();
	}
}
