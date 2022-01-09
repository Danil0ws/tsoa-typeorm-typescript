module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    extends: ['standard-with-typescript', 'prettier'],
    parserOptions: {
      project: './tsconfig.json',
    },
    plugins: ['prettier', 'unused-imports'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-extraneous-class': 'off',
      'unused-imports/no-unused-imports': 'warn',
      'import/prefer-default-export': 'off',
      'no-console': 'off',
      'import/extensions': 'off',
      'class-methods-use-this': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-floating-promises': 'off'
    },
  }
  