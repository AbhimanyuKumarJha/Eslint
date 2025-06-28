This is the readme for eslint express project.

# Eslint Express Project

here the indent is 2 spaces
This project is set up to use ESLint for linting JavaScript code in an Express application

## my notes

- the custom should be written in the defineConfig function inside the rules.
- the custom rules can be added in the `rules` section of the ESLint configuration file.
  - but even with the custom rules it gives error for spacing and other issues.
- for fixing the spaing and other style issues, I am going to use .vscode settings.
- it will be better the indent to be fixed automatically by the editor.

## .vscode

- create a `.vscode` folder in the root of the project.
- create a `settings.json` file inside the `.vscode` folder.

```json
{
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.detectIndentation": false,
  "eslint.format.enable": true,
  "eslint.alwaysShowRuleFailuresAsWarnings": true
}
```

> we can create something like this to fix the spacing and other style issues automatically.
