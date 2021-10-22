module.exports = {
  extends: [
    'airbnb', // base configs from airbnb
    'plugin:prettier/recommended', // eslint-config-prettier: removes all config which conflicts with prettier, translates prettier errors to eslint errors
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'import/extensions': ['warn', 'never'],
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
  plugins: ['prettier', '@typescript-eslint'],
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
  parser: '@typescript-eslint/parser',
};
