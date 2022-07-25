"use strict";
exports.__esModule = true;
exports.formatBench = exports.bench = void 0;
function bench(func) {
    var totalElapsed = BigInt(0);
    var iterations = 0;
    while (iterations++ < 10000) {
        var before_1 = process.hrtime.bigint();
        func();
        var after_1 = process.hrtime.bigint();
        totalElapsed += after_1 - before_1;
        if (totalElapsed > BigInt(1000000000)) {
            break;
        }
    }
    var timePerIter = totalElapsed / BigInt(iterations);
    var iterPerSec = (BigInt(1000000000) * BigInt(iterations)) / totalElapsed;
    return { iterations: iterations, timePerIter: timePerIter, iterPerSec: iterPerSec };
}
exports.bench = bench;
function formatBench(result, label) {
    console.log("".concat(label || 'bench', ": ").concat(result.iterPerSec, " iterations/sec, ").concat(result.timePerIter, " ns/iter, made ").concat(result.iterations, " iters"));
}
exports.formatBench = formatBench;
//# sourceMappingURL=benchmark.js.map