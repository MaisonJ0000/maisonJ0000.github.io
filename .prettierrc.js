// reference (좀 더 확실한 reference가 필요함)
// https://velog.io/@kyusung/eslint-prettier-config

const vscodeSettings = {
  arrowParens: "avoid",
  bracketSpacing: true,
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "preserve",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false,
  vueIndentScriptAndStyle: false
};

module.exports = {
  ...vscodeSettings,
  singleQuote: true,
  trailingComma: "all",
};
