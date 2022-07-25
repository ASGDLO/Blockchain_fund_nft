"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useRawLogs = void 0;
var react_1 = require("react");
var useEthers_1 = require("./useEthers");
var readonlyNetworks_1 = require("../providers/network/readonlyNetworks");
var hooks_1 = require("../hooks");
/**
 * Returns all blockchain logs given a block filter.
 * The hook will cause the component to refresh when a new block is mined and the returned logs change.
 * @see {@link useLogs} for a more easy-to-use version of the query.
 * @param filter an event filter, which blocks to query
 * @param queryParams allows for additional configuration of the query (see {@link QueryParams})
 * @returns an array of [logs](https://docs.ethers.io/v5/api/providers/types/#providers-Log)
 * @public
 */
function useRawLogs(filter, queryParams) {
    if (queryParams === void 0) { queryParams = {}; }
    var library = (0, useEthers_1.useEthers)().library;
    var providers = (0, readonlyNetworks_1.useReadonlyNetworks)();
    var _blockNumber = (0, hooks_1.useBlockNumber)();
    var blockNumbers = (0, hooks_1.useBlockNumbers)();
    var _a = (0, react_1.useState)(), logs = _a[0], setLogs = _a[1];
    var chainId = queryParams.chainId;
    var _b = (0, react_1.useMemo)(function () { return (chainId ? [providers[chainId], blockNumbers[chainId]] : [library, _blockNumber]); }, [providers, library, blockNumbers, _blockNumber, chainId]), provider = _b[0], blockNumber = _b[1];
    function updateLogs() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = setLogs;
                        if (!!filter) return [3 /*break*/, 1];
                        _b = undefined;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, (provider === null || provider === void 0 ? void 0 : provider.getLogs(filter))];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        _a.apply(void 0, [_b]);
                        return [2 /*return*/];
                }
            });
        });
    }
    (0, react_1.useEffect)(function () {
        void updateLogs();
    }, [provider, blockNumber]);
    return logs;
}
exports.useRawLogs = useRawLogs;
//# sourceMappingURL=useRawLogs.js.map