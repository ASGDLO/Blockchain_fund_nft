"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.falseEncoded = exports.trueEncoded = exports.ethersAbi = void 0;
var ethers_1 = require("ethers");
var MultiCall2_json_1 = __importDefault(require("../../constants/abi/MultiCall2.json"));
exports.ethersAbi = new ethers_1.utils.Interface(MultiCall2_json_1["default"].abi);
exports.trueEncoded = '0'.repeat(63) + '1';
exports.falseEncoded = '0'.repeat(63) + '0';
//# sourceMappingURL=constants.js.map