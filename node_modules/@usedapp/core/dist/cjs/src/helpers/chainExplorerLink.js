"use strict";
exports.__esModule = true;
exports.getTransactionLink = exports.getAddressLink = void 0;
var getAddressLink = function (explorerUrl) { return function (address) { return "".concat(explorerUrl, "/address/").concat(address); }; };
exports.getAddressLink = getAddressLink;
var getTransactionLink = function (explorerUrl) { return function (txnId) { return "".concat(explorerUrl, "/tx/").concat(txnId); }; };
exports.getTransactionLink = getTransactionLink;
//# sourceMappingURL=chainExplorerLink.js.map