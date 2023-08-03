

module.exports = {
  //* We can add this plugins for better linting later, now it will take to much time to fix them!
  /* extends: ['react-app', "eslint:recommended",
    "plugin:react/recommended", "prettier"], */

  extends: ['react-app', "prettier"],

  overrides: [
    {
      files: ['**/*.ts?(x)'],

    },
  ],
  ignorePatterns: ["**/charting_library/*.js","**/charting_library/*.ts"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-unused-expressions": "off",
    "jsx-a11y/alt-text": "off",
    "no-sequences": "off",
    "strict": "off",
    "no-undef": "off",
    "eqeqeq": "off"
  }
};
