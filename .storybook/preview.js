import { ThemeProvider, Global, css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: sans-serif;
      }
    `}
  />
);

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: {},
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  }),
];
