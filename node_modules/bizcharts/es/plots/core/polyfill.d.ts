interface ReplaceApi {
    sourceKey: string;
    targetKey: string;
    notice: string;
}
export declare const replaceApi: (replaceApiList: Array<ReplaceApi>, options: object) => void;
/**
 * 将的sourceKey的配置作为targetKey的配置；
 * 例如：将angleAxis的作为xAxis的配置
 */
export declare const polyfillAxis: (cfg: any, name: any) => void;
export declare const polyfillVisible: (polyfillOpt: any, path: any) => any;
export declare const polyfillOptions: (opt: any) => any;
export declare const polyfillEvents: (chart: any, preOptions: any, newOptions: any) => void;
export declare const polyfillTitleEvent: (options: any) => {};
export declare const polyfillDescriptionEvent: (options: any) => {};
export {};
