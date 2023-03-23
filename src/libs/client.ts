import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'guitto-corp',
  apiKey: process.env.API_KEY,
});