import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Provide a static locale, fetch a user-specific locale, or
  // read a locale from a cookie
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
