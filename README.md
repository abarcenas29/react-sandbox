# React Sandbox

A custom made react-sandbox to only include the minimal set of features that is relevent (at least to me) to setup any project

# Features

**_React_**

The reason why this repo is called such. It what makes this boilerplate exist. If you are looking at this, then you should know what react does. To know more, head on over to their official website.

Official Website: [React](https://facebook.github.io/react)

**_Redux_**

Pretty standard if you want to create React Apps that needs to handle data across components. Basically a _predictable state container_ its commonly bundled with any react boilerplate like peanut butter to jelly in a sandwich, or _dinuguan (pig's blood)_ to _puto (rice cake)_.

Official Website: [Redux](http://redux.js.org)

**_Thunk_**

An async _redux_ middleware.

_I was originally going for *redux_saga* but given that this sandbox is for small-medium projects, I decided to go with the simpler async callers._

Official Website: [Redux Thunk](https://github.com/gaearon/redux-thunk)

**_PWA_**

Loads the essentials resources in your browser to increase the performance of the app. 

**_Semantic UI_**

This sandbox already includes the semantic-ui style suite as well as option to personalize it to your liking.

Official Website: [Semantic UI Framework](https://semantic-ui.com/), [Semantic UI React](http://react.semantic-ui.com/)

**_Styled Components_**

Component styling. Better than using the `css-loaders` or `style-loaders`.

Official Website: [Styled Components](https://www.styled-components.com/)

**_Quick Scaffolding_**

Because `react-router v4` takes an amount of work to setup new routes. This uses `plop` in generating the necessary route and files needed to get started in writing new segments of your app

Other Features ...

* PrettierJS - the opinionated JS formatter to make sure your codebase is standard through out the dev cycle.
* ES Lint (Standard) - this boilerplate is using the [Standard](https://standardjs.com/) style of coding, but running under ESLint.

## Quick Setup

1. Clone the repo  `git clone git@github.com:abarcenas29/react-sandbox.git`
2. Execute these set of commands:
    1. `yarn`
    3. `yarn run eject` -- remove the git folder for creating a new repo
3. Run `yarn run start:dev` or `yarn run start:prod` for production build
4. visit `http://locahost:3100` for dev. `http://localhost:3100` for prod

## Generators

Generators (using `plop`) is used to generate the necessary files to create a new component, or setup a new route.

Script: `yarn run generate`

## To-Dos

* Isomorphic JS

## Webpack Notes

This sandbox is loaded with an alternative, _parallel-webpack_ module that uses all of the host's machines cpu resources to build the files needed. This also in junction with other webpack optimizing features, like _Happy-Pack_ module and compiling libraries using Webpack's DLL plugin.

### Adding Library to be cached (DLLed)

the DLL config is stored in the `internals/dll.webpack.js` the file should explain how it works. Add the modules you want to cache in the `entry` property.

## Author Notes

This sandbox is merely a way for me to understand on react-boilerplates work. Also give me the capability to make custom-tailored toolset, or edit existing toolset in future projects. Anyone is free to use this if they understand how this sandbox work.