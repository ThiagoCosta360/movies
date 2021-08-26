import * as CryptoTS from 'crypto-ts';
import { environment } from 'src/environments/environment';
import { Buffer } from 'buffer';

export const base64 = (value: string): string => Buffer.from(value, 'base64').toString();
export const encrypt = (value: string): string => CryptoTS.AES.encrypt(value, environment.securityKey).toString();
export const decrypt = (value: string | null): string => CryptoTS.AES.decrypt(value ? value : '', environment.securityKey).toString(CryptoTS.enc.Utf8);
