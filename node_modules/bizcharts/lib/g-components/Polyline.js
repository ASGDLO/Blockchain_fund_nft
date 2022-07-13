"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var group_1 = require("../context/group");
var Helper_1 = __importDefault(require("./Base/Helper"));
var Base_1 = __importDefault(require("./Base"));
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(props) {
        var _this = _super.call(this, props) || this;
        _this.helper = new Helper_1.default('polyline');
        return _this;
    }
    return Polyline;
}(Base_1.default));
exports.default = group_1.withGroupContext(Polyline);
//# sourceMappingURL=Polyline.js.map