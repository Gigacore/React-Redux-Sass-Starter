![logos](https://image.ibb.co/m8S9ew/react_redux_sass.jpg)

# React, Redux & Sass Starter
A simple and quick way to get you going with developing React applications with the latest versions of React, Redux Toolkit and Sass.

Comes with pre-configured Webpack for bundling your application to help save time in setting up your project. Keeps CSS out of JavaScript to maintain separation of concerns. Redux Toolkit takes care of State Management.

**Demo:** https://www.gigacore.in/demos/react-redux-demo/

For a complex example with Async actions, take a look at: [react-weather-forecast](https://github.com/Gigacore/react-weather-forecast)

### Components 🔩 Styles 🎨 Action! 🎬

With all necessary tools in place, all you need to do is start creating React Components, style them and use Redux Toolkit for the State management.

All the required code (JS + Sass) goes inside the ```src``` folder. Webpack will compile, bundle and output in the ```public``` folder, which you can upload/deploy to the root directory of your web server to publish your app!

### Get started!
```
git clone https://github.com/Gigacore/React-Redux-Sass-Starter.git
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
* ES6 Transpiler: [@babel/core](https://babeljs.io/)
* State Management: [Redux Toolkit](https://redux-toolkit.js.org/)
* Linting: [eslint](https://eslint.org/)
* CSS Extraction: [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
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
   ├─ components/             # Create components here
   |  ├─ Controls.js
   |  ├─ Counter.js
   |─ containers/             # Containers bridge Components with the State.
   |  ├─ Controls.js
   |  ├─ Counter.js
   ├─ features/               # Redux Toolkit slices
   |  ├─ counter/
   |  |  ├─ counterSlice.js
   ├─ styles/                 # All styling goes here.
   |  ├─ main.scss
   ├─ App.js                  # Include your main component(s).
   ├─ index.js                # Passes state to App. Renders markup to DOM.
   └─ store.js                # Creates and exports store.
```

### Learn

This starter kit assumes, you are familiar with JavaScript (ES6). If you are new to this stack, here are some resources to help you get started with:

**React** - [Quick Start](https://reactjs.org/docs/hello-world.html) | [Start Learning React](https://egghead.io/courses/start-learning-react) | [React in 8-minutes](https://medium.com/learning-new-stuff/learn-react-js-in-7-min-92a1ef023003)

**Redux Toolkit** - [Quick Start](https://redux-toolkit.js.org/introduction/quick-start)

**Sass** - [Sass Guide](http://sass-lang.com/guide)

#### The MIT License (MIT)
MIT © 2025 Santhosh Sundar
