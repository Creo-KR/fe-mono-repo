# Emotion

https://emiotion.sh

## Install Emotion

```
# for storybook
yarn add -D @emotion/react @storybook/addon-styling
yarn common-components add @emotion/react
```

## Storybook Setting

.storybook/main.js

```
module.exports = {
  ...,
  addons: [
    ...,
    '@storybook/addon-styling'
  ],
  ...
};
```

.storybook/preview.js

```
import { ThemeProvider, Global, css } from '@emotion/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

...,

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

```

## Babel Plugin

```
yarn add -D @emotion/babel-plugin @emotion/babel-preset-css-prop
```

.babelrc

```
{
  "plugins": ["@emotion"],
  "presets": ["@emotion/babel-preset-css-prop"]
}

```

## Typescript JSX css Props

tsconfig.json

```
{
  ...,
  "compilerOptions": {
    ...,
    "jsxImportSource": "@emotion/react"
  },
  ...
}

```

## ESLint Plugin

```
yarn add -D @emotion/eslint-plugin
```

.eslintrc.js

```
{
  plugins: [..., '@emotion']
}

```
