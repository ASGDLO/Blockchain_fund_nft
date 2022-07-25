export interface BenchResult {
    iterations: number;
    timePerIter: bigint;
    iterPerSec: bigint;
}
export declare function bench(func: () => void): BenchResult;
export declare function formatBench(result: BenchResult, label?: string): void;
//# sourceMappingURL=benchmark.d.ts.map