import { CurrencyFormatOptions } from './formatting';
/**
 * @public
 */
export declare class Currency {
    readonly name: string;
    readonly ticker: string;
    readonly decimals: number;
    formattingOptions: CurrencyFormatOptions;
    constructor(name: string, ticker: string, decimals: number, formattingOptions?: Partial<CurrencyFormatOptions>);
    format(value: string, overrideOptions?: Partial<CurrencyFormatOptions>): string;
}
/**
 * @public
 */
export declare class FiatCurrency extends Currency {
    constructor(name: string, ticker: string, decimals?: number, formattingOptions?: Partial<CurrencyFormatOptions>);
}
/**
 * @public
 */
export declare class NativeCurrency extends Currency {
    readonly chainId: number;
    constructor(name: string, ticker: string, chainId: number, decimals?: number, formattingOptions?: Partial<CurrencyFormatOptions>);
}
/**
 * @public
 */
export declare class Token extends Currency {
    readonly chainId: number;
    readonly address: string;
    constructor(name: string, ticker: string, chainId: number, address: string, decimals?: number, formattingOptions?: Partial<CurrencyFormatOptions>);
}
//# sourceMappingURL=Currency.d.ts.map