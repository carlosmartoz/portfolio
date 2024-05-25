module.exports = {
  
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["react"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  extends: [
    "next/core-web-vitals",
    "standard-with-typescript",
    "plugin:react/recommended",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: "script",
      },
      files: [".eslintrc.{js,cjs}"],
    },
  ],

  rules: { "@typescript-eslint/triple-slash-reference": "off" },
};
