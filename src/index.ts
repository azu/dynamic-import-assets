const loadJs = (url: string): Promise<HTMLScriptElement> => {
    const script = document.createElement("script");
    script.src = url;
    document.querySelector("head")!.appendChild(script);
    return new Promise((resolve, reject): void => {
        script.addEventListener("load", () => {
            resolve(script);
        });
        script.addEventListener("error", () => {
            reject(new Error(`Can not load: ${url}`));
        });
    });
};

const loadCSS = (url: string): Promise<HTMLLinkElement> => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.querySelector("head")!.appendChild(link);
    return new Promise((resolve, reject): void => {
        link.addEventListener("load", () => {
            resolve(link);
        });
        link.addEventListener("error", () => {
            reject(new Error(`Can not load: ${url}`));
        });
    });
};

export type Loader<T extends HTMLElement> = (url: string) => Promise<T>;

export function createDynamicImportAssetsLoader<T extends HTMLElement>(loader: Loader<T>): (url: string) => Promise<T> {
    const cacheMap = new Map<string, T>();
    return (url: string): Promise<T> => {
        const cachedElement = cacheMap.get(url);
        if (cachedElement) {
            return Promise.resolve(cachedElement);
        }
        return loader(url).then((element) => {
            cacheMap.set(url, element);
            return element;
        });
    };
}

export const dynamicImportJS = createDynamicImportAssetsLoader((url) => loadJs(url));
export const dynamicImportCSS = createDynamicImportAssetsLoader((url) => loadCSS(url));
