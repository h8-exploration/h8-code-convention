# Hacktiv8 Base ESlint config


## Installation 

To get started, we should install few packages

```bash
npm install prettier eslint @hacktiv8id/eslint-config-base -D
```

PS: when you install `@hacktiv8id/eslint-config-base` it will create an `.eslintrc.json` if not exists on your project.


## Run

Try the linter

```bash
npx eslint .
```

Format your code with Prettier

```bash
npx eslint . --fix
```