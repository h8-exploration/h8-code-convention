# Hacktiv8 Base ESlint config


To get started, we should install few packages

```bash
npm install prettier eslint @hacktiv8id/eslint-config-base -D
```

after that, we can create an `.eslintrc` file in the project root directory

```json
{
  "extends": "@hacktiv8id/eslint-config-base"
}
```

to test it if the lint works


```bash
npx eslint .
```

Add `--fix` to format your code with prettier


```bash
npx eslint . --fix
```