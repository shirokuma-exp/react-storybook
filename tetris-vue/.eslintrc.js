module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "@vue/eslint-config-typescript/recommended",
  ],
  rules: {
    "no-redeclare": "off"
  }
};
