/**
 * @internal Intended for internal use - use it on your own risk
 */
export function warnOnInvalidFilter(filter) {
    if (!filter) {
        return;
    }
    const { contract, event, args } = filter;
    console.warn(`Invalid contract filter: address=${contract.address} event=${event} args=${args}`);
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export function encodeFilterData(filter, fromBlock, toBlock, blockHash) {
    if (!filter) {
        return undefined;
    }
    const { contract, event, args } = filter;
    if (!contract.address || !event) {
        warnOnInvalidFilter(filter);
        return undefined;
    }
    try {
        const encodedTopics = contract.interface.encodeFilterTopics(event, args);
        if (blockHash) {
            return {
                address: contract.address,
                topics: encodedTopics,
                blockHash: blockHash,
            };
        }
        else {
            return {
                address: contract.address,
                topics: encodedTopics,
                fromBlock: fromBlock !== null && fromBlock !== void 0 ? fromBlock : 0,
                toBlock: toBlock !== null && toBlock !== void 0 ? toBlock : 'latest',
            };
        }
    }
    catch (e) {
        if (e instanceof Error) {
            return e;
        }
        else {
            warnOnInvalidFilter(filter);
            return undefined;
        }
    }
}
/**
 * @internal Intended for internal use - use it on your own risk
 */
export function decodeLogs(filter, result) {
    if (!result || !filter) {
        return undefined;
    }
    try {
        if (result instanceof Error) {
            return {
                value: undefined,
                error: result,
            };
        }
        const decodedLogs = [];
        for (const log of result) {
            const data = filter.contract.interface.decodeEventLog(filter.event, log.data, log.topics);
            decodedLogs.push({
                data,
                blockNumber: log.blockNumber,
                blockHash: log.blockHash,
                transactionIndex: log.transactionIndex,
                transactionHash: log.transactionHash,
                removed: log.removed,
            });
        }
        return {
            value: decodedLogs,
            error: undefined,
        };
    }
    catch (error) {
        return {
            value: undefined,
            error: error,
        };
    }
}
//# sourceMappingURL=logs.js.map