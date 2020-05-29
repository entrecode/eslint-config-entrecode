# eslint-config-entrecode

entrecode code style

## the ESLint way

> use this for shared projects, or if you want to do everything like it's meant to be

1. run this in your repo:

```sh
npm i --save-dev eslint eslint-config-entrecode
```

2. add `.eslintrc` file:

```json
{
  "extends": ["entrecode"]
}
```

## the global repo way

> use this if you want this code style applied to all projects without custom .eslintrc in VSCode

1. clone this repo
2. run `npm i` in it
3. Add this to VSCode settings:
   "eslint.options": {
   "configFile": "/Users/<path-to>/eslint-config-entrecode/main.js"
   },
4. `npm i eslint@7 -g` (MUST be ESLint 7.x)
