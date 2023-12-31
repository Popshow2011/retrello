module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  endOfLine: 'lf',
  importOrder: [
    '^@/pages(.*)$',
    '^@/components(.*)$',
    '^@/ui(.*)$',
    '^@/domains(.*)$',
    '^@/services(.*)$',
    '^@/(.*)$',
    '^~/(.*)$',
    '^\\.\\.\\/',
    '^\\.(\\/[^/.]+)+$',
    '^\\.\\/[^/.]+\\.(types|utils|module\\.css|css)$',
    '\\.(png|jpg|svg)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: '*.svg',
      options: {
        parser: 'html',
      },
    },
  ],
};
