Compile with:

```sh
webpack --config vendor.webpack.config.js
webpack --config app.webpack.config.js
```

Use with the following `index.html`

```html
<script src="build/vendor.bundle.js"></script>
<script src="build/app.bundle.js"></script>
```