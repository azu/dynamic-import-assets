export type dynamicImportAssetsOptions = {
    type: "js" | "css"
}
const loadJs = (url: string): Promise<HTMLElement> => {
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
const loadCSS = (url: string): Promise<HTMLElement> => {
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

const load = (url: string, type: dynamicImportAssetsOptions["type"]) => {
    if (type === "js") {
        return loadJs(url);
    } else if (type === "css") {
        return loadCSS(url);
    }
    throw new Error("Can not load unknown type" + type + ", url" + url);
};

export const createDynamicImportAssetsLoader = (): (url: string, options: dynamicImportAssetsOptions) => Promise<void> => {
    const cacheSet = new Set<string>();
    return async (url: string, options: dynamicImportAssetsOptions) => {
        if (cacheSet.has(url)) {
            return;
        }
        return load(url, options.type).then(() => {
            cacheSet.add(url);
        });
    };
};

export const dynamicImportAssets = createDynamicImportAssetsLoader();
