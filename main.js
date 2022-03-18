module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.+(jsx|tsx)'],
      extends: ['@react-native-community', 'plugin:prettier/recommended'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
    {
      files: ['**/*.+(js)'],
      extends: ['airbnb', 'plugin:prettier/recommended'],
      rules: {},
    },
    {
      files: ['**/*.+(ts)'],
      extends: ['airbnb', 'airbnb-typescript/base', 'plugin:prettier/recommended'],
      rules: {},
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
