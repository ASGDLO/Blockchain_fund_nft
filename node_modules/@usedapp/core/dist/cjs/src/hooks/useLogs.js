"use strict";
exports.__esModule = true;
exports.useLogs = void 0;
var react_1 = require("react");
var useRawLogs_1 = require("./useRawLogs");
var helpers_1 = require("../helpers");
/**
 * Makes a call to get the logs for a specific contract event and returns the decoded logs or an error if present.
 * The hook will cause the component to refresh when a new block is mined and the returned logs change.
 * A syntax sugar for {@link useRawLogs} that uses ABI, event name, and arguments instead of raw data.
 * @param filter an event filter (see {@link TypedFilter})
 * @param queryParams allows for additional configuration of the query (see {@link LogQueryParams})
 * @returns an array of decoded logs (see {@link LogsResult})
 * @public
 */
function useLogs(filter, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var fromBlock = queryParams.fromBlock, toBlock = queryParams.toBlock, blockHash = queryParams.blockHash;
    var rawFilter = (0, react_1.useMemo)(function () { return (0, helpers_1.encodeFilterData)(filter, fromBlock, toBlock, blockHash); }, [
        filter,
        fromBlock,
        toBlock,
        blockHash,
    ]);
    var result = (0, useRawLogs_1.useRawLogs)(rawFilter instanceof Error ? undefined : rawFilter, queryParams);
    return (0, react_1.useMemo)(function () { return (0, helpers_1.decodeLogs)(filter, rawFilter instanceof Error ? rawFilter : result); }, [result, filter, rawFilter]);
}
exports.useLogs = useLogs;
//# sourceMappingURL=useLogs.js.map