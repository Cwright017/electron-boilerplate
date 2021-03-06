# [![Build Status](https://travis-ci.org/Cwright017/electron-boilerplate.svg?branch=master)](https://travis-ci.org/Cwright017/electron-boilerplate) [![Dependency Status](https://david-dm.org/CWright017/electron-boilerplate.svg)](https://david-dm.org/CWright017/electron-boilerplate)

# Electron-Boilerplate
Simple boilerplate for [Electron](http://electron.atom.io/) projects complete with [React](https://facebook.github.io/react/), [React Router](https://github.com/reactjs/react-router), [Webpack](http://webpack.github.io/docs/) and [Babel](https://github.com/babel/babel).

## Getting Started

### - Installing
* Clone the repo:
`git clone https://github.com/Cwright017/electron-boilerplate`

* Install dependencies: `cd electron-boilerplate && npm install`

### - Running
* Simply run `npm start` :tada:

and there you have it, a running Electron app. 😆

You will notice that the app includes the Chrome dev tools when ran in development mode - to stop showing these just change the `NODE_ENV` to anything but dev in the `package.json`.

## Development

The main app entry point is `main.js` and this sits in the root of the project. Main.js is the [main process](http://electron.atom.io/docs/api/) of the electron app, and here you control the 'native' aspects of the application, such as menu bars, showing/hiding and hotkeys.

The entry point into the [render process](http://electron.atom.io/docs/api/) is `index.jsx`, located inside the `app` folder along with all other render process items. The render process is basically just a regular web app with access to regular Chrome apis with the addition of being able to access Electron specific apis.

### - [React-Router](https://github.com/reactjs/react-router)
The `index.jsx` file is the file listing the routes to be used by [React Router](https://github.com/reactjs/react-router).

### - [React](https://facebook.github.io/react/)
The render process part of the app is built using Facebook's [React](https://facebook.github.io/react/) view library, for a componentized structure.

To develop components simply create a folder under `app/components` with the name of your component and include:
 ```
import {render} from 'react-dom';
import React from 'react';
 ```

in your component. Then you can write a regular es6 class extending `React.component`

### - ES6
The app includes [Babel](https://github.com/babel/babel) in the form of [Babel-Loader](https://github.com/babel/babel-loader) allowing you to write your components in ES6 and JSX and this will be transpiled into browser compatible ES5.

## Testing
The project is setup to use the  [Jest](https://facebook.github.io/jest/) testing tool from Facebook, 
and includes [Enzyme](http://airbnb.io/enzyme/index.html) from Airbnb as a utility to make testing react components easy.

To run the unit tests use the standard `npm test` and the Jest output will appear in your terminal after they have finished running.

Tests are located within each components folder as a `*.spec.js` file, and Jest is configured to automatically find these files.

Jest is setup with [identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy) to mock CSS modules. Specifying a module in your code as `className={style.title}` will 
result in `class='title'`. 

## Packaging

To package the app once you have finished developing, just run `npm run package` and this will tell [Webpack](https://github.com/webpack/webpack) to bundle your application into a `dist` folder in the root of the project - and then [Electron-Packager](https://github.com/electron-userland/electron-packager) will package your app using the name specified in the `Package.json` name field.

The project is setup to produce an app for Mac but this can be configured by passing in different arguments to Electron-Packager - and allows packaging of OS X, Windows and Linux apps, as well as signed apps for the Mac App Store.

## License
[MIT](https://github.com/Cwright017/electron-boilerplate/blob/master/LICENSE.md)
