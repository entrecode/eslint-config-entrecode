module.exports = {
  extends: [
    'airbnb', // base configs from airbnb
    'plugin:prettier/recommended', // eslint-config-prettier: removes all config which conflicts with prettier, translates prettier errors to eslint errors
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        useTabs: false,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        proseWrap: 'preserve',
        htmlWhitespaceSensitivity: 'css',
        endOfLine: 'lf',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    curly: ['error', 'all'],
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
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'jsx-a11y/alt-text': 'warn',
    'import/extensions': ['warn', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-cycle': 'off',
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
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/no-cycle': 'off',
        '@typescript-eslint/keyword-spacing': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
            imports: 'always-multiline',
            objects: 'always-multiline',
          },
        ],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: true, variables: true, typedefs: true },
        ],
        // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
        'react/prop-types': 'off',
      },
    },
  ],
};
