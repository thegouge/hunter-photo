import { dev } from '$app/env'

export const API_URL = import.meta.env[`${dev ? 'VITE_DEV_URL' : 'https://hunter-photo.herokuapp.com/'}`] 