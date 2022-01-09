module.exports = {
    '*.{js,ts}': ['yarn lint', 'yarn format'],
    '**/*.ts?(x)': () => 'yarn run build',
  }
  