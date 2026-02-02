// Environment configuration
export const env = {
  MODE: import.meta.env.MODE,
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
} as const;

// API configuration
export const apiConfig = {
  baseURL:
    import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com',
  timeout: Number(import.meta.env.VITE_API_TIMEOUT) || 30000,
} as const;

// App configuration
export const appConfig = {
  name: import.meta.env.VITE_APP_NAME || 'React Boilerplate',
  version: import.meta.env.VITE_APP_VERSION || '1.0.0',
} as const;
