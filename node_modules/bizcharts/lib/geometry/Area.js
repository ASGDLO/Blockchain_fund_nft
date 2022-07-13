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
var area_1 = __importDefault(require("@antv/g2/lib/geometry/area"));
var Base_1 = __importDefault(require("./Base"));
var core_1 = require("../core");
require("@antv/g2/lib/geometry/shape/area");
core_1.registerGeometry('Area', area_1.default);
var AreaGeom = /** @class */ (function (_super) {
    __extends(AreaGeom, _super);
    function AreaGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'area';
        return _this;
    }
    return AreaGeom;
}(Base_1.default));
exports.default = AreaGeom;
//# sourceMappingURL=Area.js.map