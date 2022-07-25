"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ethersAbi = void 0;
var ethers_1 = require("ethers");
var MultiCall_json_1 = __importDefault(require("../../constants/abi/MultiCall.json"));
exports.ethersAbi = new ethers_1.utils.Interface(MultiCall_json_1["default"].abi);
//# sourceMappingURL=constants.js.map