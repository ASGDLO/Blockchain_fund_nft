export declare type Assertions<S extends Record<string, unknown>> = {
    [K in keyof S]: string;
};
export declare function validateArguments<S extends Record<string, unknown>>(args: S, assertions: Assertions<S>): void;
//# sourceMappingURL=validateArgument.d.ts.map