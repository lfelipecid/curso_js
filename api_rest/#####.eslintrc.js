module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    semi: 'off',
    'class-methods-use-this': 'off',
    'tcomma-dangle': 'off',
    'no-param-reassign': 'off',
  },
};
