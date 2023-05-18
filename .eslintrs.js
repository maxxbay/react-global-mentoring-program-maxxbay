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
    'plugin:prettier/recommended',
  ],
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
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    'no-useless-concat': 'off',
    'no-restricted-globals': [
      'error',
      { name: 'self', message: 'Use this instead.' },
    ],
    'no-mixed-operators': 'off',
    'no-new-func': 'off',
    'no-useless-escape': 'off',
    'no-lone-blocks': 'off',
    'react-internal/no-production-logging': 'off',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'react-internal/no-production-logging': 'off',
        'no-lone-blocks': 'off',
        'no-useless-concat': 'off',
      },
    },
  ],
};
