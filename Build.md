Compile with:
npm run build

run the build: cmdline in build folder and 'http-server'

```sh
webpack --config vendor.webpack.config.js
webpack --config app.webpack.config.js
```

Use with the following `index.html`

```html
<script src="build/vendor.bundle.js"></script>
<script src="build/app.bundle.js"></script>
```