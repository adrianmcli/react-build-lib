# react-build-lib
A simple utility for compiling your React components to CommonJS modules.

> Ideally, you should never need to touch Webpack and Babel if all you want to do is to make and publish React components.

# How to use

1. Install the package with either `yarn` or `npm`:

  ```bash
  yarn add --dev react-build-lib
  npm install --save-dev react-build-lib  # or use npm
  ```

2. Add the following script to your `package.json` file:

  ```json
  "scripts": {
    "build:lib": "react-build-lib"
  }
  ```
3. Now, everytime you run `npm run build:lib`, babel will compile all your javascript files in your `src` folder and output a `lib` folder. By default, it will also copy over any other files.

**Note:** You can also set your source and ouput directories by providing two additional arguments:

```
react-build-lib src lib
```
# Also see

[React-Build-Dist](https://github.com/adrianmcli/react-build-dist)
