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
import Schema from '@antv/g2/lib/geometry/schema';
import BaseGemo from './Base';
import { registerGeometry } from '../core';
import '@antv/g2/lib/geometry/shape/schema';
import '@antv/g2/lib/geometry/shape/schema/candle';
import '@antv/g2/lib/geometry/shape/schema/box';
registerGeometry('Schema', Schema);
var SchemaGeom = /** @class */ (function (_super) {
    __extends(SchemaGeom, _super);
    function SchemaGeom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.GemoBaseClassName = 'schema';
        return _this;
    }
    return SchemaGeom;
}(BaseGemo));
export default SchemaGeom;
//# sourceMappingURL=Schema.js.map