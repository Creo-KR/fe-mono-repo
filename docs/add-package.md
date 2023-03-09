# Add New Package

## packages/common-components

```
yarn init -y
```

## Add Workspace

workspace.code-workspace

```
{
  "folders": [
    ...,
    {
      "path": "packages/common-components"
    }
  ],
  ...
}
```

package.json

```
{
  ...,
  "scripts": {
    "common-components": "yarn workspace common-components"
  },
  ...
}
```

tsconfig.json

```
{
  ...,
  "references": [
    {
      "path": "packages/common-components"
    }
  ],
}
```

## Install Typescript And Initialize

```
yarn common-components add -D typescript
yarn common-components tsc --init
```

## Set Typescript Config

packages/common-components/tsconfig.json

```
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@common-components": ["./src/index.ts"]
      "@common-components/*": ["./src/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

```

## Set Other Packages

packages/next-app-1/tsconfig.json

```
{
  ...,
  "compilerOptions": {
    ...,
    "paths": {
      "@common-components": ["./src/index.ts"],
      "@common-components/*": ["./src/*"]
    }
  },
  ...,
}
```

packages/next-app-1/package.json

```
{
 ...,
  "dependencies": {
    ...,
    "common-components": "workspace:*",
  },
  ...
}
```

## Set NextApp Config

next-config.js

```
const nextConfig = {
  ...,
  experimental: {
    externalDir: true,
  },
};
module.exports = nextConfig;

```

## Usage import Component

page.tsx

```
import { Button } from '@common-components';

const Page: FC = props => {
  ...

  return (
    ...
    <Button>Hello Button</Button>
    ...
  );
};

```
