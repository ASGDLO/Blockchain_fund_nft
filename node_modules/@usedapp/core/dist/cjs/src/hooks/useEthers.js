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
exports.useEthers = void 0;
var utils_1 = require("ethers/lib/utils");
var getAddNetworkParams_1 = require("../helpers/getAddNetworkParams");
var validateArgument_1 = require("../helpers/validateArgument");
var providers_1 = require("../providers");
var hooks_1 = require("../hooks");
var useReadonlyProvider_1 = require("./useReadonlyProvider");
/**
 * Returns connection state and functions that allow to manipulate the state.
 * **Requires**: `<ConfigProvider>`
 *
 * @public
 * @returns {} Object with the following:
    - `account: string` - current user account (or *undefined* if not connected)
    - `chainId: ChainId` - current chainId (or *undefined* if not connected)
    - `library: Web3Provider` - an instance of ethers [Web3Provider](https://github.com/EthWorks/useDapp/tree/master/packages/example) (or `undefined` if not connected)
    - `active: boolean` - returns if provider is connected (read or write mode)
    - `activateBrowserWallet()` - function that will initiate connection to browser web3 extension (e.g. Metamask)
    - `async activate(connector: AbstractConnector, onError?: (error: Error) => void, throwErrors?: boolean)` - function that allows to connect to a wallet
    - `async deactivate()` - function that disconnects wallet
    - `error?: Error` - an error that occurred during connecting (e.g. connection is broken, unsupported network)
 */
function useEthers() {
    var _this = this;
    var _a = (0, providers_1.useNetwork)(), _b = _a.network, networkProvider = _b.provider, chainId = _b.chainId, accounts = _b.accounts, errors = _b.errors, deactivate = _a.deactivate, activate = _a.activate, activateBrowserWallet = _a.activateBrowserWallet, isLoading = _a.isLoading;
    var networks = (0, hooks_1.useConfig)().networks;
    var supportedChainIds = networks === null || networks === void 0 ? void 0 : networks.map(function (network) { return network.chainId; });
    var isUnsupportedChainId = chainId && supportedChainIds && supportedChainIds.indexOf(chainId) < 0;
    var unsupportedChainIdError = new Error("Unsupported chain id: ".concat(chainId, ". Supported chain ids are: ").concat(supportedChainIds, "."));
    unsupportedChainIdError.name = 'UnsupportedChainIdError';
    var error = isUnsupportedChainId ? unsupportedChainIdError : errors[errors.length - 1];
    var readonlyNetwork = (0, useReadonlyProvider_1.useReadonlyNetwork)();
    var provider = networkProvider !== null && networkProvider !== void 0 ? networkProvider : readonlyNetwork === null || readonlyNetwork === void 0 ? void 0 : readonlyNetwork.provider;
    var switchNetwork = function (chainId) { return __awaiter(_this, void 0, void 0, function () {
        var error_1, errChainNotAddedYet, chain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, validateArgument_1.validateArguments)({ chainId: chainId }, { chainId: 'number' });
                    if (!provider) {
                        throw new Error('Provider not connected.');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 6]);
                    return [4 /*yield*/, provider.send('wallet_switchEthereumChain', [{ chainId: "0x".concat(chainId.toString(16)) }])];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 3:
                    error_1 = _a.sent();
                    errChainNotAddedYet = 4902 // Metamask error code
                    ;
                    if (!(error_1.code === errChainNotAddedYet)) return [3 /*break*/, 5];
                    chain = networks === null || networks === void 0 ? void 0 : networks.find(function (chain) { return chain.chainId === chainId; });
                    if (!(chain === null || chain === void 0 ? void 0 : chain.rpcUrl)) return [3 /*break*/, 5];
                    return [4 /*yield*/, provider.send('wallet_addEthereumChain', [(0, getAddNetworkParams_1.getAddNetworkParams)(chain)])];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5: return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var account = accounts[0] ? (0, utils_1.getAddress)(accounts[0]) : undefined;
    return {
        connector: undefined,
        library: provider,
        chainId: isUnsupportedChainId ? undefined : networkProvider !== undefined ? chainId : readonlyNetwork === null || readonlyNetwork === void 0 ? void 0 : readonlyNetwork.chainId,
        account: account,
        active: !!provider,
        activate: function (providerOrConnector) { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!('getProvider' in providerOrConnector)) return [3 /*break*/, 3];
                        console.warn('Using web3-react connectors is deprecated and may lead to unexpected behavior.');
                        return [4 /*yield*/, providerOrConnector.activate()];
                    case 1:
                        _b.sent();
                        _a = activate;
                        return [4 /*yield*/, providerOrConnector.getProvider()];
                    case 2: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    case 3: return [2 /*return*/, activate(providerOrConnector)];
                }
            });
        }); },
        activateBrowserWallet: activateBrowserWallet,
        deactivate: deactivate,
        setError: function () {
            throw new Error('setError is deprecated');
        },
        error: error,
        isLoading: isLoading,
        switchNetwork: switchNetwork
    };
}
exports.useEthers = useEthers;
//# sourceMappingURL=useEthers.js.map