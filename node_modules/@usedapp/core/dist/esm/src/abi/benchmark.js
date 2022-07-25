export function bench(func) {
    let totalElapsed = BigInt(0);
    let iterations = 0;
    while (iterations++ < 10000) {
        const before = process.hrtime.bigint();
        func();
        const after = process.hrtime.bigint();
        totalElapsed += after - before;
        if (totalElapsed > BigInt(1000000000)) {
            break;
        }
    }
    const timePerIter = totalElapsed / BigInt(iterations);
    const iterPerSec = (BigInt(1000000000) * BigInt(iterations)) / totalElapsed;
    return { iterations, timePerIter, iterPerSec };
}
export function formatBench(result, label) {
    console.log(`${label || 'bench'}: ${result.iterPerSec} iterations/sec, ${result.timePerIter} ns/iter, made ${result.iterations} iters`);
}
//# sourceMappingURL=benchmark.js.map