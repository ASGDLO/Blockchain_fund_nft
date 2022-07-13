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
var polygon_1 = __importDefault(require("@antv/g2/lib/geometry/polygon"));
var Base_1 = __importDefault(require("./Base"));
var core_1 = require("../core");
require("@antv/g2/lib/geometry/shape/polygon");
require("@antv/g2/lib/geometry/shape/polygon/square");
core_1.registerGeometry('Polygon', polygon_1.default);
var PolygonGeom = /** @class */ (function (_super) {
    __extends(PolygonGeom, _super);
    function PolygonGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'polygon';
        return _this;
    }
    return PolygonGeom;
}(Base_1.default));
exports.default = PolygonGeom;
//# sourceMappingURL=Polygon.js.map