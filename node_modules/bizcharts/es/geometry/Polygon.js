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
import Polygon from '@antv/g2/lib/geometry/polygon';
import BaseGemo from './Base';
import { registerGeometry } from '../core';
import '@antv/g2/lib/geometry/shape/polygon';
import '@antv/g2/lib/geometry/shape/polygon/square';
registerGeometry('Polygon', Polygon);
var PolygonGeom = /** @class */ (function (_super) {
    __extends(PolygonGeom, _super);
    function PolygonGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'polygon';
        return _this;
    }
    return PolygonGeom;
}(BaseGemo));
export default PolygonGeom;
//# sourceMappingURL=Polygon.js.map