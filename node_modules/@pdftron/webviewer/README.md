# WebViewer

[WebViewer](https://www.pdftron.com/webviewer) is a powerful JavaScript-based PDF Library that's part of the [PDFTron PDF SDK](https://www.pdftron.com). It provides a slick out-of-the-box responsive UI that interacts with the core library to view, annotate and manipulate PDFs that can be embedded into any web project.

![WebViewer UI](https://www.pdftron.com/downloads/pl/webviewer-ui.png)

## Usage

**1) Install WebViewer**
```
npm i @pdftron/webviewer --save
```

This will also download all the assets that need to be included for WebViewer to work.

**2) Copy assets and resources to your public/static folder**

These assets need to be served with your application. For example, if your project is built into a `dist` folder, you could copy these assets into `dist/public`.

The folder you need to copy is `node_modules/@pdftron/webviewer/public`.
```
cp -R ./node_modules/@pdftron/webviewer/public ./dist
```

We recommend using a module bundler like [Webpack](https://webpack.js.org/) to automatically do this for you. There is a nice plugin called [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) that does just this.

**3) Import and instantiate WebViewer**

```js
import WebViewer from '@pdftron/webviewer'

const element = document.getElementById('viewer');

WebViewer({
  path: '/public', // point to where the files you copied are served from
  initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf' // path to your document
}, element).then((instance) => {
  // Call APIs here
})
```

## Documentation
Full documentation for WebViewer can be found [here](https://www.pdftron.com/documentation/web/guides).

## Licensing
WebViewer will run in trial mode until a license is provided. For more information on licensing, please visit [our website.](https://www.pdftron.com/licensing)
