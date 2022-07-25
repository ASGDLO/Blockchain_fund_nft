"use strict";
// NOTE: This file serves as an internal API module. It is exported from the package, but use it on your own risk.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.getUniqueActiveCalls = exports.getChainMeta = exports.decodeCallResult = exports.encodeCallData = exports.getChainById = exports.warnOnInvalidCall = exports.useBlockNumbers = exports.useInterval = exports.useDebouncePair = exports.useLocalStorage = exports.useDebounce = exports.connectContractToSigner = exports.WindowContext = exports.WindowProvider = exports.useWindow = exports.useReadonlyNetworks = exports.ReadonlyNetworksProvider = exports.useNotificationsContext = exports.useTransactionsContext = exports.useMultiChainStates = exports.DEFAULT_STORED_TRANSACTIONS = exports.DEFAULT_NOTIFICATIONS = exports.chainStateReducer = exports.callsReducer = exports.blockNumberReducer = exports.MultiChainStatesContext = exports.MultiChainStateProvider = exports.ConfigProvider = exports.ConfigContext = exports.BlockNumberContext = exports.BlockNumberProvider = exports.NetworkProvider = void 0;
var providers_1 = require("./providers");
__createBinding(exports, providers_1, "NetworkProvider");
__createBinding(exports, providers_1, "BlockNumberProvider");
__createBinding(exports, providers_1, "BlockNumberContext");
__createBinding(exports, providers_1, "ConfigContext");
__createBinding(exports, providers_1, "ConfigProvider");
__createBinding(exports, providers_1, "MultiChainStateProvider");
__createBinding(exports, providers_1, "MultiChainStatesContext");
__createBinding(exports, providers_1, "blockNumberReducer");
__createBinding(exports, providers_1, "callsReducer");
__createBinding(exports, providers_1, "chainStateReducer");
__createBinding(exports, providers_1, "DEFAULT_NOTIFICATIONS");
__createBinding(exports, providers_1, "DEFAULT_STORED_TRANSACTIONS");
__createBinding(exports, providers_1, "useMultiChainStates");
__createBinding(exports, providers_1, "useTransactionsContext");
__createBinding(exports, providers_1, "useNotificationsContext");
__createBinding(exports, providers_1, "ReadonlyNetworksProvider");
__createBinding(exports, providers_1, "useReadonlyNetworks");
__createBinding(exports, providers_1, "useWindow");
__createBinding(exports, providers_1, "WindowProvider");
__createBinding(exports, providers_1, "WindowContext");
var hooks_1 = require("./hooks");
__createBinding(exports, hooks_1, "connectContractToSigner");
__createBinding(exports, hooks_1, "useDebounce");
__createBinding(exports, hooks_1, "useLocalStorage");
__createBinding(exports, hooks_1, "useDebouncePair");
__createBinding(exports, hooks_1, "useInterval");
__createBinding(exports, hooks_1, "useBlockNumbers");
var helpers_1 = require("./helpers");
__createBinding(exports, helpers_1, "warnOnInvalidCall");
__createBinding(exports, helpers_1, "getChainById");
__createBinding(exports, helpers_1, "encodeCallData");
__createBinding(exports, helpers_1, "decodeCallResult");
__createBinding(exports, helpers_1, "getChainMeta");
__createBinding(exports, helpers_1, "getUniqueActiveCalls");
//# sourceMappingURL=internal.js.map