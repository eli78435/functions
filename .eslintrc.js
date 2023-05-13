module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
  },
  ignorePatterns: [
    '/lib/**/*', // Ignore built files.
  ],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-scoped-var': 2,
    'brace-style': ['warn', '1tbs', {
      'allowSingleLine': true,
    }],
    'camelcase': 1,
    'computed-property-spacing': [2, 'never'],
    'curly': 2,
    'eol-last': 2,
    'eqeqeq': [2, 'smart'],
    'max-depth': [1, 3],
    'max-len': ['warn', {
      'code': 120,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
    }],
    'max-statements': [1, 15],
    'new-cap': 1,
    'no-extend-native': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-trailing-spaces': 2,
    'no-unused-vars': 1,
    'no-unused-expressions': 1,
    'no-use-before-define': [2, 'nofunc'],
    'object-curly-spacing': [2, 'always'],
    'object-curly-newline': [0, {
      'ObjectExpression': 'always',
      'ObjectPattern': {
        'multiline': true, 'minProperties': 6, 'consistent': true,
      },
      'ImportDeclaration': 'never',
      'ExportDeclaration': {
        'multiline': true, 'minProperties': 3,
      },
    }],
    'quotes': [2, 'single', 'avoid-escape'],
    'semi': [2, 'always'],
    'keyword-spacing': [2, {
      before: true, after: true,
    }],
    'space-unary-ops': 2,
    'linebreak-style': 2,
  },
};
