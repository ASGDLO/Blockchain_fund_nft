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
var path_1 = __importDefault(require("@antv/g2/lib/geometry/path"));
var path_in_1 = require("@antv/g2/lib/animate/animation/path-in");
var Base_1 = __importDefault(require("./Base"));
var core_1 = require("../core");
core_1.registerAnimation('path-in', path_in_1.pathIn);
core_1.registerGeometry('Path', path_1.default);
var PathGeom = /** @class */ (function (_super) {
    __extends(PathGeom, _super);
    function PathGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'path';
        return _this;
    }
    return PathGeom;
}(Base_1.default));
exports.default = PathGeom;
//# sourceMappingURL=Path.js.map