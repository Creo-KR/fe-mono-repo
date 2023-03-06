# fe-mono-repo

## Root Repository / Yarn Init, Install Typescript, SDK

```
yarn set version latest
yarn init -2
yarn add -D typescript
yarn tsc --init
yarn dlx @yarnpkg/sdks vscode
yarn plugin import typescript
yarn plugin import workspace-tools
yarn plugin import interactive-tools
```

## Typescript config

tsconfig.json

```
{
  "compilerOptions": {
    "target": "es2018",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
  }
}
```

## Add Workspace

package.json

```
{
  ...,
  "packageManager": "yarn@3.4.1",
  "workspaces" : [
    "packages/*"
  ]
}
```

## Create Next App

packages/next-app-1

```
cd packages
yarn create next-app
```

packages/next-app-1/package.json

```
{
  ...,
  "packageManager": "yarn@3.4.1",
  ...
}
```

## VS Code Workspace

```
{
  "folders": [
    {
      "path": "."
    },
    {
      "path": "packages/next-app-1"
    }
  ],
  "settings": {
    "editor.formatOnSave": true
  },
  "extensions": {
    "recommendations": ["arcanis.vscode-zipfs", "esbenp.prettier-vscode"]
  }
}
```
