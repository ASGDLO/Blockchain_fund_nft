/**
 * @internal Intended for internal use - use it on your own risk
 */
export function callsReducer(state = [], action) {
    if (action.type === 'ADD_CALLS') {
        return [...state, ...action.calls.map((call) => (Object.assign(Object.assign({}, call), { address: call.address.toLowerCase() })))];
    }
    else if (action.type === 'UPDATE_CALLS') {
        return state.map((call) => {
            if (call.chainId !== action.chainId || !action.updatedCalls.includes(call)) {
                return call;
            }
            const blockNumber = action.blockNumber;
            return Object.assign(Object.assign({}, call), { lastUpdatedBlockNumber: blockNumber });
        });
    }
    else {
        let finalState = state;
        for (const call of action.calls) {
            const index = finalState.findIndex((x) => x.address.toLowerCase() === call.address.toLowerCase() && x.data === call.data);
            if (index !== -1) {
                finalState = finalState.filter((_, i) => i !== index);
            }
        }
        return finalState;
    }
}
//# sourceMappingURL=callsReducer.js.map