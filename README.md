# dynamic-import-assets

Dynamic Import Assets like JavaScript and CSS.

## Feature

- Dynamic load JavaScript and CSS from URL
- Support Promises
- Work with ES modules registry like [UNPKG](https://unpkg.com/) and [Pika CDN](https://www.pika.dev/cdn)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install dynamic-import-assets

## Usage

For example, you want to load <https://toast.evila.me/>'s js and css using [UNPKG](https://unpkg.com/), do following:

```js
(async function main(){
    const { dynamicImportAssets } = await import("https://unpkg.com/dynamic-import-assets@^1.0.0?module");
    const { createToast } = await import("https://unpkg.com/@evillt/toast@1.1.3?module");
    // inject <link rel="stylesheet">
    await dynamicImportAssets("https://unpkg.com/@evillt/toast@1.1.3/dist/toast.min.css", { type: "css" });
    // use toast after loaded 
    createToast("Hello world");
})();
```

Also support JavaScript as script loading:

```js
(async function main(){
    const { dynamicImportAssets } = await import("https://unpkg.com/dynamic-import-assets@^1.0.0?module");
    await Promise.all([
        // inject <link rel="stylesheet">
        dynamicImportAssets("https://unpkg.com/@evillt/toast@1.1.3/dist/toast.min.css", { type: "css" }),
        // inject <script>
        dynamicImportAssets("https://unpkg.com/@evillt/toast@1.1.3", { type: "js" })
    ]);
    // use toast after loaded 
    toast.createToast("Hello world");
})();
```


## Changelog

See [Releases page](https://github.com/azu/dynamic-import-assets/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/dynamic-import-assets/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
