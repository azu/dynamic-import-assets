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

Provide these APIs

- `dynamicImportScript`: Load JavaScript Script and resolve with loaded `<script>`
- `dynamicImportCSS`: Load CSS Script and resolve with `<link>`

```ts
export declare type Loader<T extends HTMLElement> = (url: string) => Promise<T>;
export declare function createDynamicImportAssetsLoader<T extends HTMLElement>(loader: Loader<T>): (url: string) => Promise<T>;
export declare const dynamicImportScript: (url: string) => Promise<HTMLScriptElement>;
export declare const dynamicImportCSS: (url: string) => Promise<HTMLLinkElement>;
```

## Examples

For example, you want to load <https://toast.evila.me/>'s js and css using [UNPKG](https://unpkg.com/), do following:

```js
(async function main(){
    const { dynamicImportCSS } = await import("https://unpkg.com/dynamic-import-assets@^1.0.0?module");
    const { createToast } = await import("https://unpkg.com/@evillt/toast@1.1.3?module");
    // inject <link rel="stylesheet">
    await dynamicImportCSS("https://unpkg.com/@evillt/toast@1.1.3/dist/toast.min.css");
    // use toast after loaded 
    createToast("Hello world");
})();
```

Also support JavaScript as script loading:

```js
(async function main(){
    const { dynamicImportJS, dynamicImportCSS } = await import("https://unpkg.com/dynamic-import-assets@^1.0.0?module");
    await Promise.all([
        // inject <link rel="stylesheet">
        dynamicImportCSS("https://unpkg.com/@evillt/toast@1.1.3/dist/toast.min.css"),
        // inject <script>
        dynamicImportJS("https://unpkg.com/@evillt/toast@1.1.3")
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
