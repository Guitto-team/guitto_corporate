import { addDecorator } from '@storybook/react';
import { withDocs } from 'storybook-addon-docs';

addDecorator(withDocs);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}