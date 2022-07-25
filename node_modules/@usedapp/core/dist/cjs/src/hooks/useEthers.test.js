"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var chai_1 = require("chai");
var ethers_1 = require("ethers");
var react_1 = require("react");
var model_1 = require("../model");
var testing_1 = require("../testing");
var useEthers_1 = require("./useEthers");
describe('useEthers', function () {
    var network1;
    var network2;
    var config;
    var receiver = ethers_1.Wallet.createRandom().address;
    before(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ;
                    return [4 /*yield*/, (0, testing_1.setupTestingConfig)()];
                case 1:
                    (_a = _b.sent(), config = _a.config, network1 = _a.network1, network2 = _a.network2);
                    return [4 /*yield*/, network1.wallets[0].sendTransaction({ to: receiver, value: 100 })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, network2.wallets[1].sendTransaction({ to: receiver, value: 200 })];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('returns no wallets and readonly provider when not connected', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, result, waitForCurrent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, testing_1.renderDAppHook)(function () { return (0, useEthers_1.useEthers)(); }, { config: config })];
                case 1:
                    _a = _b.sent(), result = _a.result, waitForCurrent = _a.waitForCurrent;
                    return [4 /*yield*/, waitForCurrent(function (val) { return !val.isLoading; })];
                case 2:
                    _b.sent();
                    (0, chai_1.expect)(result.error).to.be.undefined;
                    (0, chai_1.expect)(result.current.error).to.be.undefined;
                    (0, chai_1.expect)(result.current.activate).to.be.a('function');
                    (0, chai_1.expect)(result.current.deactivate).to.be.a('function');
                    (0, chai_1.expect)(result.current.activateBrowserWallet).to.be.a('function');
                    (0, chai_1.expect)(result.current.connector).to.be.undefined;
                    (0, chai_1.expect)(result.current.chainId).to.eq(model_1.Mainnet.chainId);
                    (0, chai_1.expect)(result.current.account).to.be.undefined;
                    (0, chai_1.expect)(result.current.error).to.be.undefined;
                    (0, chai_1.expect)(result.current.library).to.eq(network1.provider);
                    (0, chai_1.expect)(result.current.active).to.be["true"];
                    (0, chai_1.expect)(result.current.isLoading).to.be["false"];
                    return [2 /*return*/];
            }
        });
    }); });
    it('throws error if trying to use unsupported network', function () { return __awaiter(void 0, void 0, void 0, function () {
        var configWithUnsupportedNetworks, _a, result, waitForCurrent;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    configWithUnsupportedNetworks = __assign(__assign({}, config), { networks: [model_1.Mainnet] });
                    return [4 /*yield*/, (0, testing_1.renderDAppHook)(function () {
                            var activate = (0, useEthers_1.useEthers)().activate;
                            (0, react_1.useEffect)(function () {
                                void activate(network2.provider);
                            }, []);
                            return (0, useEthers_1.useEthers)();
                        }, { config: configWithUnsupportedNetworks })];
                case 1:
                    _a = _c.sent(), result = _a.result, waitForCurrent = _a.waitForCurrent;
                    return [4 /*yield*/, waitForCurrent(function (val) { return !!val.error; })];
                case 2:
                    _c.sent();
                    (0, chai_1.expect)(result.current.error).not.to.be.undefined;
                    (0, chai_1.expect)((_b = result.current.error) === null || _b === void 0 ? void 0 : _b.toString()).to.include("Unsupported chain id: ".concat(testing_1.SECOND_TEST_CHAIN_ID));
                    return [2 /*return*/];
            }
        });
    }); });
    it('returns correct provider after activation', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, result, waitForCurrent;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, testing_1.renderDAppHook)(function () {
                        var activate = (0, useEthers_1.useEthers)().activate;
                        (0, react_1.useEffect)(function () {
                            void activate(network2.provider);
                        }, []);
                        return (0, useEthers_1.useEthers)();
                    }, { config: config })];
                case 1:
                    _a = _b.sent(), result = _a.result, waitForCurrent = _a.waitForCurrent;
                    return [4 /*yield*/, waitForCurrent(function (val) { return !val.isLoading && val.chainId === network2.provider.network.chainId; })];
                case 2:
                    _b.sent();
                    (0, chai_1.expect)(result.error).to.be.undefined;
                    (0, chai_1.expect)(result.current.error).to.be.undefined;
                    (0, chai_1.expect)(result.current.activate).to.be.a('function');
                    (0, chai_1.expect)(result.current.deactivate).to.be.a('function');
                    (0, chai_1.expect)(result.current.activateBrowserWallet).to.be.a('function');
                    (0, chai_1.expect)(result.current.connector).to.be.undefined;
                    (0, chai_1.expect)(result.current.chainId).to.eq(network2.provider.network.chainId);
                    (0, chai_1.expect)(result.current.account).to.eq(network2.provider.getWallets()[0].address);
                    (0, chai_1.expect)(result.current.error).to.be.undefined;
                    (0, chai_1.expect)(result.current.library).to.eq(network2.provider);
                    (0, chai_1.expect)(result.current.active).to.be["true"];
                    (0, chai_1.expect)(result.current.isLoading).to.be["false"];
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=useEthers.test.js.map