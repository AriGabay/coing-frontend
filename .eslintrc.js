module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': 'off',
    'comma-dangle': [2, 'always-multiline'],
  },
};
