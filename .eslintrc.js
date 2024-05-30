module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@cache', './src/cache'],
          ['@components', './src/components'],
          ['@graphql', './src/graphql'],
          ['@layouts', './src/layouts'],
          ['@pages', './src/pages'],
          ['@routes', './src/routes'],
          ['@services', './src/services'],
          ['@utils', './src/utils'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    jest: {
      version: 'latest',
    },
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jest/recommended',
    'prettier',
    'react-app/jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/react-in-jsx-scope': 'off',
    'eslint-disable-next-line': 'off',
    'no-nonoctal-decimal-escape': 'off',
    'no-unsafe-optional-chaining': 'off',
    'import/prefer-default-export': 'off',
    'jest/no-alias-methods': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: [
          'function-declaration',
          'function-expression',
          'arrow-function',
        ],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/prop-types': 'off',
  },
};
