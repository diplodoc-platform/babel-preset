# @diplodoc/babel-preset

Babel preset for Gravity UI projects

## Install
```
npm install --save-dev @diplodoc/babel-preset
```

## Usage

### Via `.babelrc`

```json5
{
  "presets": [
      "@diplodoc/babel-preset",
      {
        "env": {modules: false}, // defaults to {}
        "runtime": {useESModules: true}, // defaults to {}
        "typescript": true, // defaults to false
        "react": {runtime: "automatic"} // defaults to {}
      }
  ]
}
```