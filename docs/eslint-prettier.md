# Set ESLint And Prettier

## Install ESLint And Prettier

```
yarn add -D eslint prettier eslint-plugin-prettier
```

## Install VS Code SDK

```
yarn dlx @yarnpkg/sdks vscode
```

## Initialize ESLint Config

```
yarn add -D next react
npm init @eslint/config -- --config next,prettier
```

## Setting Workspace

workspace.code-workspace

```
{
  "settings": {
    ...,
    "eslint.packageManager": "yarn",
    "eslint.nodePath": "../../.yarn/sdks",
    "prettier.prettierPath": "../../.yarn/sdks/prettier/index.js",
  }
}
```

## Set ESLint Configuration

.eslintrc.js

```
module.exports = {
  extends: ["eslint:recommended", "next", "prettier"],
  plugins: ["prettier", "react", "@typescript-eslint"],
};
```
