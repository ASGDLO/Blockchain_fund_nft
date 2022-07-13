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
import Heatmap from '@antv/g2/lib/geometry/heatmap';
import BaseGemo from './Base';
import { registerGeometry } from '../core';
registerGeometry('Heatmap', Heatmap);
var HeatmapGeom = /** @class */ (function (_super) {
    __extends(HeatmapGeom, _super);
    function HeatmapGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'heatmap';
        return _this;
    }
    return HeatmapGeom;
}(BaseGemo));
export default HeatmapGeom;
//# sourceMappingURL=Heatmap.js.map