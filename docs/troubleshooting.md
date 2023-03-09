# 문제 해결

## Typescript

### VS Code에서 Dependencies 을 참조 못할 때 타입스크립트 sdk 위치를 지정해줘야 한다.

workspace.code-workspace

```
"settings": {
    "typescript.tsdk": ".yarn/sdks/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
  },
```

## Workspace Import

### NextJS 에서 외부 참조할때 Runtime에서 오류가 발생함. 해당 옵션을 활성화 한다.

```
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
```

next.config.js

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 외부 참조 활성화
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
```
