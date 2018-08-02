![logos](https://image.ibb.co/m8S9ew/react_redux_sass.jpg)

# React, Redux & Sass Starter
A simple and quick way to get you going with developing React applications with Redux and Sass.

Comes with pre-configured Webpack for bundling your application to help save time in setting up your project. Keeps CSS out of JavaScript to maintain separation of concerns. Redux takes care of State Management. If you are looking for _CSS-in-JS_ approach, this starter pack is not for you.

**Demo:** https://www.gigacore.in/demos/react-redux-demo/

For a complex example with Async actions, take a look at: [react-weather-forecast](https://github.com/Gigacore/react-weather-forecast)

### Components 🔩 Styles 🎨 Action! 🎬

With all necessary tools in place, all you need to do is start creating React Components, style them and optionally use Redux for the State management. It is recommended that you use Redux if the applications you are building require interactions between multiple components or that requires pulling data from external source.

All the required code (JS + Sass) goes inside the ```src``` folder. Webpack will compile, bundle and output in the ```public``` folder, which you can upload/deploy to the root directory of your web server to publish your app!

### Get started!
```
git clone
cd React-Redux-Sass-Starter
npm i
```

### Start the dev server:
```

npm run start:dev

```

### Build:
```

npm run build

```

#### Note:
* Changes made to your CSS / JS triggers a full page auto-reload.
* Running a build writes the ```bundle.js``` and ```bundle.css``` to the ```/public/dist/``` directory.

### Pre-configured tools and plugins

* Module bundler: [Webpack](https://webpack.js.org/)
* ES6 Transpiler: [babel-loader](https://github.com/babel/babel-loader)
* Linting: [eslint](https://eslint.org/)
* JS Uglification: [UglifyJsPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/)
* Dev Server: [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (```npm run start:dev```)

#### Codebase overview.

```
/
├─ public/
|  ├─ dist/
|  |  ├─ bundle.css           # CSS that's generated from SASS
|  |  ├─ bundle.js            # Contains scripts of components & vendor(s).
|  ├─ index.html              # Contains root element to mount your app.
└─ src/
   ├─ actions/                # Create actions here.
   |  ├─ counterActions.js
   ├─ components/             # Create components here
   |  ├─ Controls.js
   |  ├─ Counter.js
   |─ containers/             # Containers bridge Components with the State.
   |  ├─ Controls.js
   |  ├─ Counter.js
   ├─ constants/              # Define action types here.
   |  ├─ ActionTypes.js
   ├─ reducers/               # Create reducers here.
   |  ├─ counter.js
   |  ├─ index.js             # Combine your reducers here.
   ├─ styles/                 # All styling goes here.
   |  ├─ main.scss
   ├─ App.js                  # Include your main component(s).
   ├─ index.js                # Passes state to App. Renders markup to DOM.
   └─ store.js                # Creates and exports store.
```

### Learn

This starter kit assumes, you are familiar with JavaScript (ES6). If you are new to this stack, here are some resources to help you get started with:

**React** - [Quick Start](https://reactjs.org/docs/hello-world.html) | [Start Learning React](https://egghead.io/courses/start-learning-react) | [React in 8-minutes](https://medium.com/learning-new-stuff/learn-react-js-in-7-min-92a1ef023003)

**Redux** - [Basics](https://redux.js.org/docs/basics/) | [An Introduction](https://www.smashingmagazine.com/2016/06/an-introduction-to-redux/) | [React with Redux](https://www.youtube.com/watch?v=1w-oQ-i1XB8)

**Sass** - [Sass Guide](http://sass-lang.com/guide)

#### The MIT License (MIT)
MIT © 2017 Santhosh Sundar
