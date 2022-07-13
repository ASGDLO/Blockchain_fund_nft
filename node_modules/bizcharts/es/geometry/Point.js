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
import Point from '@antv/g2/lib/geometry/point';
import BaseGemo from './Base';
import { registerGeometry } from '../core';
// 注册图形
import '@antv/g2/lib/geometry/shape/point/hollow';
import '@antv/g2/lib/geometry/shape/point/image';
import '@antv/g2/lib/geometry/shape/point/solid';
registerGeometry('Point', Point);
var PointGeom = /** @class */ (function (_super) {
    __extends(PointGeom, _super);
    function PointGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'point';
        return _this;
    }
    return PointGeom;
}(BaseGemo));
export default PointGeom;
//# sourceMappingURL=Point.js.map