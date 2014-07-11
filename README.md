# AlloyUI.com

[![Dependency Status](https://david-dm.org/liferay/alloyui.com.svg?theme=shields.io)](https://david-dm.org/liferay/alloyui.com)

## Setup

This site is made with [DocPad](https://github.com/bevry/docpad), a static generator in [Node](http://nodejs.org/), and the best way to install it is via [npm](http://npmjs.org/).

First, you need to clone the project:

```sh
$ git clone https://github.com/liferay/alloyui.com
```

Then go to the folder and install all dependencies:

```sh
$ cd alloyui.com
$ npm install
```

Now you're good to go!

## Usage

DocPad has three basic options used in this project:

To generate a static version of the site, which can be viewed in `out/` folder, run:

```sh
$ npm run generate
```

To regenerate the site as you edit and save files, which can be viewed at `http://localhost:9778`, run:

```sh
$ npm run watch
```

To generate and send the output to `gh-pages` branch, run:

```sh
$ npm run deploy
```

## Browser Support

We do care about it.

![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
IE 9+ ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ |