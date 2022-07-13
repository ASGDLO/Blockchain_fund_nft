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
import Path from '@antv/g2/lib/geometry/path';
import { pathIn } from '@antv/g2/lib/animate/animation/path-in';
import BaseGemo from './Base';
import { registerGeometry, registerAnimation } from '../core';
registerAnimation('path-in', pathIn);
registerGeometry('Path', Path);
var PathGeom = /** @class */ (function (_super) {
    __extends(PathGeom, _super);
    function PathGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'path';
        return _this;
    }
    return PathGeom;
}(BaseGemo));
export default PathGeom;
//# sourceMappingURL=Path.js.map