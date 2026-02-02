import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to React Boilerplate',
      description: 'A modern, production-ready React template with TypeScript',
      theme: {
        toggle: 'Toggle theme',
        light: 'Light mode',
        dark: 'Dark mode',
      },
      navigation: {
        home: 'Home',
        about: 'About',
      },
      error: {
        title: 'Oops! Something went wrong',
        retry: 'Try again',
        goHome: 'Go to homepage',
      },
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido a React Boilerplate',
      description:
        'Una plantilla moderna de React lista para producción con TypeScript',
      theme: {
        toggle: 'Cambiar tema',
        light: 'Modo claro',
        dark: 'Modo oscuro',
      },
      navigation: {
        home: 'Inicio',
        about: 'Acerca de',
      },
      error: {
        title: '¡Ups! Algo salió mal',
        retry: 'Intentar de nuevo',
        goHome: 'Ir a la página principal',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
