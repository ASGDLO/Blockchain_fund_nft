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
var point_1 = __importDefault(require("@antv/g2/lib/geometry/point"));
var Base_1 = __importDefault(require("./Base"));
var core_1 = require("../core");
// 注册图形
require("@antv/g2/lib/geometry/shape/point/hollow");
require("@antv/g2/lib/geometry/shape/point/image");
require("@antv/g2/lib/geometry/shape/point/solid");
core_1.registerGeometry('Point', point_1.default);
var PointGeom = /** @class */ (function (_super) {
    __extends(PointGeom, _super);
    function PointGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'point';
        return _this;
    }
    return PointGeom;
}(Base_1.default));
exports.default = PointGeom;
//# sourceMappingURL=Point.js.map