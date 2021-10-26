# eslint-config-entrecode

entrecode code style

## global usage (preferred)
> use this if you want this code style applied to all projects without custom .eslintrc in VSCode

1. run this in your root projects directory:

```sh
npm i eslint-config-entrecode
```

2. add `.eslintrc` file:

```json
{
  "extends": ["entrecode"]
}
```

4. add vscode settings:

```json
{
  "eslint.lintTask.enable": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```
## local usage (best for new projects or outside shared projects)

> use this for shared projects, or if you want to do everything like it's meant to be

1. run this in your repo:

```sh
npm i --save-dev eslint-config-entrecode
```

2. add `.eslintrc` file:

```json
{
  "extends": ["entrecode"]
}
```

3. add vscode settings:

```json
{
  "eslint.lintTask.enable": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## also possible: the global repo way (use this for development)

> like global usage, but without the module installed at top level

1. clone this repo
2. run `npm i` in it
3. Add this to VSCode settings:
   "eslint.options": {
   "configFile": "/Users/<path-to>/eslint-config-entrecode/main.js"
   },
4. `npm i eslint@7 -g` (MUST be ESLint 7.x)

5. add vscode settings:

```json
{
  "eslint.lintTask.enable": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```
