const { resolve } = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    useJSXTextNode: true,
    tsconfigRootDir: './'
  },
  rules: {
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': [
      1,
      'always',
      { ignoreClassFields: true }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'import/no-named-as-default': 'off',
    'import/no-duplicates': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'warn',
    'import/no-cycle': 'warn',
    'import/no-unresolved': 'warn',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { classes: false }],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'end-of-line': ['off'],
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'import',
    'prettier',
    'jest'
  ],
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended'
  ],
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'no-useless-constructor': 'off'
      }
    }
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      'babel-eslint': ['.js', '.jsx']
    },
    'import/resolver': {
      'eslint-import-resolver-lerna': {
        packages: resolve(__dirname, 'packages')
      }
    }
  }
};
