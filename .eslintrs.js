module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'react-app',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './jsconfig.js',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: [
      'error',
      'double',
      {
        avoidEscape: true,
      },
    ],
    eqeqeq: 'warn',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
