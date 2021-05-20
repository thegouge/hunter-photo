import { dev } from '$app/env';

export const API_URL = dev ? import.meta.env['VITE_DEV_URL'] : 'https://hunter-photo.herokuapp.com';
