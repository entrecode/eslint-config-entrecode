module.exports = {
  extends: [
    'airbnb', // base configs from airbnb
    'plugin:prettier/recommended', // eslint-config-prettier: removes all config which conflicts with prettier, translates prettier errors to eslint errors
  ],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    curly: ['error', 'all'],
    'valid-jsdoc': 'error',
    strict: ['warn', 'global'],
    'callback-return': 'error',
    'global-require': 'warn',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'warn',
    'no-sync': 'warn',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_embedded', '_links', '_traversal', '_id', '_created', '_modified'],
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
  },
  plugins: ['prettier'],
  env: {
    es6: true,
    node: true,
    mocha: true,
    jest: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  overrides: [
    {
      files: ['**/*.+(ts|tsx)'],
      extends: ['airbnb-typescript'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'import/extensions': ['warn', 'never'],
      },
    },
  ],
};
