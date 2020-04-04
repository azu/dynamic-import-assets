# dynamic-import-assets

Dynamic Import Assets like JavaScript and CSS.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install dynamic-import-assets

## Usage

For example, you want to load <https://toast.evila.me/>'s js and css:

```js
(async function main(){
    const dynamicImportAssets = await import("https://cdn.pika.dev/dynamic-import-assets@^1.0.0");
    await Promise.all([
        dynamicImportAssets("https://unpkg.com/@evillt/toast@1.1.3/dist/toast.min.css", { type: "css" }),
        dynamicImportAssets("https://unpkg.com/@evillt/toast@1.1.3", { type: "js" })
    ]);
    // use toast after loaded 
    toast.createToast("Hello world");
})()
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
