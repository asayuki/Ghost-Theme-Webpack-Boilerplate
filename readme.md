# Ghost Theme Webpack Boilerplate

This is a boilerplate for developing complex themes/applications for the [Ghost Publishing Platform](https://ghost.org)

It supports typescript, cssNext, scss, and ES6.
![ghost logo](https://ghost.org/logo.svg)

### Prerequisites

To use this boilerplate you need to have
* A local installation of [Ghost](https://docs.ghost.org/v1.0.0/docs/install-local)
* An installation of [Node](https://nodejs.org/en/) and Npm

### Installing

1. Clone the boilerplate and install the dev-dependencies
  ```
  $ git clone 
  $ cd 
  $ npm install
  ```

2. Create a symlinc to your ghost server install dir
  ```
  $ ln -s 
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
* Package contents of `./dist` to `./package/[package-name].zip`.

## Contributing

If you have any questions, improvments or comments, please send me a PM or PR.

## Authors

[Me](https://villi.am) :sun_with_face:

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

# TODO

[x] Tests
