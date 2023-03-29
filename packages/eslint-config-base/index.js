module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['simple-import-sort'],
  rules: {
    // Accessors: We allow built-in getter and setter from JavaScript so we need to check if the acccessors has the pairs
    'accessor-pairs': 'error',

    // Iterators and Generators: We allow iterator like `for of ` for in` etc
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        printWidth: 120,
        bracketSpacing: true,
      }, // configure Prettier for ESLint
    ],
  },
};
