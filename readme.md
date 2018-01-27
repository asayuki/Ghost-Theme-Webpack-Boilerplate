# Ghost Theme Webpack Boilerplate


<img style="margin: 10px" height="30px" src="https://ghost.org/logo.svg"><img style="margin: 10px" height="30px" src="https://github.com/MoOx/postcss-cssnext/raw/master/logo/cssnext-256.png"><img style="margin: 10px" height="30px" src="http://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png"><img style="margin: 10px" height="30px" src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/es6/es6.png"><img style="margin: 10px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/2/29/TypeScript_Logo_%28Blue%29.svg"><img style="margin: 10px" height="30px" src="https://raw.githubusercontent.com/webpack/media/master/logo/icon.png">

This is a boilerplate for developing complex themes/applications for the [Ghost Publishing Platform](https://ghost.org)
It supports typescript, cssNext, Sass, and ES6.


### Prerequisites

To use this boilerplate you need to have
* A local installation of [Ghost](https://docs.ghost.org/v1.0.0/docs/install-local)
* An installation of [Node](https://nodejs.org/en/) and Npm

### Installing

1. Clone the boilerplate and install the dev-dependencies
  ```
  $ mkdir my-theme
  $ git clone git@github.com:villiampoignant/Ghost-Theme-Webpack-Boilerplate.git ./my-theme
  $ cd my-theme
  $ npm install
  ```

2. Update package.json according to reference your own project

3. Create a symlink to your ghost server install directory
  ```
  $ ln -s /full/path/to/my-theme/dist /full/path/to/ghost-install-dir/content/themes/my-theme
  ```

### Development

`$ npm run dev` will do the following:

* **Compile** all code in `./src/app` to `./dist/assets/app.js`.
* **Copy** over everyting in `./src/theme/` to `./dist/`.
* **Watch** `./src` for changes.
* Start a **Live Reload** server.

If you have symlinked the `./dist` folder to your ghost's theme dir and enabled the theme, you should have fully functional **Live Reload** on [http://localhost:2368/]()

## Deployment

Two build scripts:

`$ npm run build`:
* Compile and minify `./src/app` to `./dist`
* Copy everyting in `./src/theme/` to `./dist/`

`$ npm run build:package`:
* Run `$ npm run build`
* Package contents of `./dist` to `./packaged/[my-theme].zip`.

## Contributing

If you have any questions, improvments or comments, please send me a PM or PR.

## Authors

[Me](https://villi.am) :sun_with_face:

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## The boilerplate does not include any

* Tests
* Static Typecheckers for JS
* 
