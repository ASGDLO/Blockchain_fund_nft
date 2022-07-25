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
var ethers_1 = require("ethers");
var chai_1 = require("chai");
var ethereum_waffle_1 = require("ethereum-waffle");
var ethers_2 = require("ethers");
var testing_1 = require("../testing");
var logs_1 = require("./logs");
var AddressZero = ethers_1.constants.AddressZero;
describe('encodeFilterData', function () {
    var mockProvider = new ethereum_waffle_1.MockProvider();
    var deployer = mockProvider.getWallets()[0];
    var token;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testing_1.deployMockToken)(deployer)];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Returns undefined if the filter is undefined', function () {
        (0, chai_1.expect)((0, logs_1.encodeFilterData)(undefined)).to.be.undefined;
    });
    it('Returns FilterByBlockHash when blockHash is valid', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var encodedFilterData = (0, logs_1.encodeFilterData)(filter, undefined, undefined, '0x0');
        (0, chai_1.expect)(encodedFilterData['blockHash']).to.not.be.undefined;
    });
    it('Returns FilterByBlockHash when blockHash, toBlock, and fromBlock are valid', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var encodedFilterData = (0, logs_1.encodeFilterData)(filter, 0, 'latest', '0x0');
        (0, chai_1.expect)(encodedFilterData['blockHash']).to.not.be.undefined;
    });
    it('Returns Filter when toBlock and fromBlock are valid but blockHash is invalid', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var encodedFilterData = (0, logs_1.encodeFilterData)(filter, 0, 'latest', undefined);
        (0, chai_1.expect)(encodedFilterData['toBlock']).to.not.be.undefined;
    });
    it('Returns an error when passed a non-existant event', function () {
        var filter = {
            contract: token,
            event: 'Transfer2',
            args: []
        };
        var encodedFilterData = (0, logs_1.encodeFilterData)(filter, 0, 'latest');
        (0, chai_1.expect)(encodedFilterData).to.be.a('Error');
    });
    it('Returns an error when passed an arg for an un-indexed parameter', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: [AddressZero, AddressZero, 10]
        };
        var encodedFilterData = (0, logs_1.encodeFilterData)(filter, 0, 'latest');
        (0, chai_1.expect)(encodedFilterData).to.be.a('Error');
    });
    it('Returns an error when passed too many args', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: [AddressZero, AddressZero, null, AddressZero]
        };
        var encodedFilterData = (0, logs_1.encodeFilterData)(filter, 0, 'latest');
        (0, chai_1.expect)(encodedFilterData).to.be.a('Error');
    });
});
describe('decodeLogs', function () {
    var mockProvider = new ethereum_waffle_1.MockProvider();
    var deployer = mockProvider.getWallets()[0];
    var token;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, testing_1.deployMockToken)(deployer)];
                case 1:
                    token = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Returns undefined if the filter and result are undefined', function () {
        (0, chai_1.expect)((0, logs_1.decodeLogs)(undefined, undefined)).to.be.undefined;
    });
    it('Returns undefined if the result is undefined', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        (0, chai_1.expect)((0, logs_1.decodeLogs)(filter, undefined)).to.be.undefined;
    });
    it('Returns undefined if the filter is undefined', function () {
        (0, chai_1.expect)((0, logs_1.decodeLogs)(undefined, [])).to.be.undefined;
    });
    it('Returns an error if passed an error as the result', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var error = Error('');
        var decodedLogs = (0, logs_1.decodeLogs)(filter, error);
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.error).to.equal(error);
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.value).to.be.undefined;
    });
    it('Returns an empty array when passed an empty array of logs', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var logs = [];
        var decodedLogs = (0, logs_1.decodeLogs)(filter, logs);
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.error).to.be.undefined;
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.value).to.be.empty;
    });
    it('Returns an error when the event topic is a mismatch', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var logs = [
            {
                address: token.address,
                topics: [
                    ethers_2.ethers.utils.id('Transfer2(address,address,uint256)'),
                    ethers_2.ethers.utils.hexZeroPad(AddressZero, 32),
                    ethers_2.ethers.utils.hexZeroPad(AddressZero, 32),
                ],
                data: ethers_2.ethers.utils.hexZeroPad(AddressZero, 32),
                blockHash: '0x0',
                blockNumber: 0,
                logIndex: 0,
                transactionIndex: 0,
                transactionHash: '0x0',
                removed: false
            },
        ];
        var decodedLogs = (0, logs_1.decodeLogs)(filter, logs);
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.value).to.be.undefined;
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.error).to.be.a('Error');
    });
    it('Works when passed valid logs', function () {
        var filter = {
            contract: token,
            event: 'Transfer',
            args: []
        };
        var from = AddressZero;
        var to = deployer.address;
        var value = ethers_2.BigNumber.from(1);
        var blockHash = '0x0';
        var blockNumber = 1;
        var logIndex = 2;
        var transactionIndex = 3;
        var removed = true;
        var transactionHash = '0x11';
        var logs = [
            {
                address: token.address,
                topics: [
                    ethers_2.ethers.utils.id('Transfer(address,address,uint256)'),
                    ethers_2.ethers.utils.hexZeroPad(from, 32),
                    ethers_2.ethers.utils.hexZeroPad(to, 32),
                ],
                data: ethers_2.ethers.utils.hexZeroPad(ethers_2.ethers.utils.hexlify(value), 32),
                blockHash: blockHash,
                blockNumber: blockNumber,
                logIndex: logIndex,
                transactionIndex: transactionIndex,
                transactionHash: transactionHash,
                removed: removed
            },
            {
                address: token.address,
                topics: [
                    ethers_2.ethers.utils.id('Transfer(address,address,uint256)'),
                    ethers_2.ethers.utils.hexZeroPad(from, 32),
                    ethers_2.ethers.utils.hexZeroPad(to, 32),
                ],
                data: ethers_2.ethers.utils.hexZeroPad(ethers_2.ethers.utils.hexlify(value), 32),
                blockHash: blockHash,
                blockNumber: blockNumber,
                logIndex: logIndex,
                transactionIndex: transactionIndex,
                transactionHash: transactionHash,
                removed: removed
            },
        ];
        var decodedLogs = (0, logs_1.decodeLogs)(filter, logs);
        (0, chai_1.expect)(decodedLogs === null || decodedLogs === void 0 ? void 0 : decodedLogs.error).to.be.undefined;
        var theLogs = decodedLogs;
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value).to.have.length(2);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].blockHash).to.equal(blockHash);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].blockNumber).to.equal(blockNumber);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].removed).to.equal(removed);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].transactionIndex).to.equal(transactionIndex);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].transactionHash).to.equal(transactionHash);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].data.from).to.equal(from);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].data.to).to.equal(to);
        (0, chai_1.expect)(theLogs === null || theLogs === void 0 ? void 0 : theLogs.value[0].data.value).to.equal(value);
    });
});
//# sourceMappingURL=logs.test.js.map