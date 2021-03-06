module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  globals: {
    useHead: "readonly", // Nuxt modify head feature
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "never"],
    "vue/script-setup-uses-vars": "error",
    "vue/multi-word-component-names": "off",
  },
}
