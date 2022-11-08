import i18next, { ReadCallback } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string, callback: ReadCallback) => {
      import(`src/locale/languages/${language}/${namespace}.ts`)
        .then((resources) => {
          callback(null, resources);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .init({
    react: {
      useSuspense: false,
    }, // Fix error suspense
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    ns: ['translate', 'auth'], // Need to add name file translate
    defaultNS: 'translate',
  });

export default i18next;
