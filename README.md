# strict-npm-engines

[![Greenkeeper badge](https://badges.greenkeeper.io/JustinDFuller/strict-npm-engines.svg)](https://greenkeeper.io/)

Enforce the NPM and Node versions specified in the package.json "engines" property.

## Install

```
npm install strict-npm-engines --save-dev
```

```
yarn add strict-npm-engines --dev
```

## Requirements

Requires node 7.6 or higher for Async/Await.

## How to use

1. Add the engines field to your package.json, like this:

```json
{
  "engines": {
    "node": ">=8",
    "npm": ">6"
  }
}
```

You can read more about engines [in the npm documentation](https://docs.npmjs.com/files/package.json#engines)

2. Install strict-npm-engines (documentation above)

3. Add strict-npm-engines to your npm scripts.

```json
{
  "scripts": {
    "start": "strict-npm-engines && node ./index.js"
  }
}
```

If an incorrect npm or node version is used, an error message will be printed, and the process will exit with an error. Like this:

```
Invalid node version. Expected >=12 but got 8.16.0.
```

If the engines satisfy the range, the process will exit without an error.

