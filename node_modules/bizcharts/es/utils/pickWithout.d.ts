declare const pickWithout: (obj: Record<string, any>, keys: (string | RegExp)[]) => {
    [key: string]: any;
};
export default pickWithout;
