"use strict";
exports.__esModule = true;
exports.useBlockNumber = void 0;
var react_1 = require("react");
var providers_1 = require("../providers");
/**
 * Get the current block number.
 * Will update automatically when the new block is mined.
 * @public
 */
function useBlockNumber() {
    return (0, react_1.useContext)(providers_1.BlockNumberContext);
}
exports.useBlockNumber = useBlockNumber;
//# sourceMappingURL=useBlockNumber.js.map