/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  ignorePatterns: ['dist', 'results', 'coverage', '*.d.ts'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/attributes-order': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off'
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.cy.ts'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
