import { dev } from '$app/env'

export const API_URL = import.meta.env[`${dev ? 'VITE_DEV_URL' : 'VITE_PROD_URL'}`] 