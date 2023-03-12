# Install Storybook

## Add Storybook

```
npx storybook init
```

## Set Storybook Configuration

```
module.exports = {
  "stories": [
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  ...
}
```

## Run Storybook

```
yarn storybook
```
